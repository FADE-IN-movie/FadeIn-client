import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IReviewDataInfo } from "@typings/info";
import reviews from "@lib/api/reviewsAPI";

import { useSetRecoilState } from "recoil";
import { nullErrorCntState } from "@states/write";
import { successAlertState, errorAlertState } from "@states/alert";
import { selectedDateState } from "@states/reviews";

import { v4 as uuidv4 } from "uuid";
import { MESSAGE } from "@data/message";

type UseFormProps = {
  initialValues: IReviewDataInfo;
};

const useForm = ({ initialValues }: UseFormProps) => {
  const [values, setValues] = useState(initialValues);
  const router = useRouter();
  const { query } = router;
  const tmdbId = Number(query.contentId);
  const type = query.type as string;
  const setNullErrorCnt = useSetRecoilState(nullErrorCntState);
  const setSuccessAlert = useSetRecoilState(successAlertState);
  const setErrorAlert = useSetRecoilState(errorAlertState);
  const setSelectedDate = useSetRecoilState(selectedDateState);

  const initializeForm = useCallback((info: IReviewDataInfo) => {
    setValues(info);
  }, []);

  const onChangeForm = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const changeToReviewDate = () => {
    const { watchedDate } = values;
    const [year, month, date] = watchedDate.split("-").map(Number);
    setSelectedDate({
      year: year,
      month: month,
      date: date,
    });
  };

  const onSubmitForm = () => {
    if (values.rating === 0) {
      setNullErrorCnt((prev) => prev + 1);
      return setErrorAlert(MESSAGE.REQUIRE_VALUE);
    }
    const reviewId = uuidv4();
    reviews
      .createReview(reviewId, tmdbId, type, values)
      .then((status) => {
        switch (status) {
          case 201:
            setSuccessAlert(MESSAGE.SUCCESS_CREATE_REVIEW);
            changeToReviewDate();
            router.push("/review");
            break;
          default:
            break;
        }
      })
      .catch(() => {
        setErrorAlert(MESSAGE.NOT_SUCCESS_CREATE_REVIEW);
      });
  };

  const onEditForm = async (reviewId: string) => {
    reviews.editReview(reviewId, tmdbId, type, values).then((status) => {
      switch (status) {
        case 202:
          setSuccessAlert(MESSAGE.SUCCESS_EDIT_REVIEW);
          changeToReviewDate();
          router.push("/review");
          break;
        default:
          break;
      }
    });
  };

  useEffect(() => {
    if (values.rating > 0) setNullErrorCnt(0);
  }, [values, setNullErrorCnt]);

  return {
    values,
    setValues,
    initializeForm,
    onChangeForm,
    onSubmitForm,
    onEditForm,
  };
};

export default useForm;
