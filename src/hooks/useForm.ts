import { ChangeEvent, useCallback, useState } from "react";
import { useRouter } from "next/router";
import { IReviewDataInfo } from "@typings/info";
import reviews from "@lib/api/reviewsAPI";

import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

type UseFormProps = {
  initialValues: IReviewDataInfo;
};

const useForm = ({ initialValues }: UseFormProps) => {
  const [values, setValues] = useState(initialValues);
  const router = useRouter();
  const { query } = router;
  const tmdbId = Number(query.contentId);
  const type = query.type as string;

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

  const onSubmitForm = () => {
    const reviewId = uuidv4();
    reviews
      .createReview(reviewId, tmdbId, type, values)
      .then((status) => {
        switch (status) {
          case 201:
            toast.success("리뷰가 등록되었습니다.");
            router.push("/review");
            break;
          default:
            break;
        }
      })
      .catch(() => {
        toast.error("리뷰를 등록하지 못했습니다. 다시 시도해주세요.");
      });
  };

  const onEditForm = async (reviewId: string) => {
    reviews.editReview(reviewId, tmdbId, type, values).then((status) => {
      switch (status) {
        case 202:
          router.push("/review");
          break;
        default:
          break;
      }
    });
  };

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
