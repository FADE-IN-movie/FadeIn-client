import { ChangeEvent, useCallback, useState } from "react";
import { useRouter } from "next/router";
import { IReviewDataInfo } from "@typings/info";
import reviews from "@lib/api/reviewsAPI";

import { v4 as uuidv4 } from "uuid";

type UseFormProps = {
  initialValues: IReviewDataInfo;
};

const useForm = ({ initialValues }: UseFormProps) => {
  const [values, setValues] = useState(initialValues);
  const router = useRouter();

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

  const onSubmitForm = async () => {
    const { query } = router;
    const reviewId = uuidv4();
    console.log(reviewId);
    const tmdbId = Number(query.contentId);
    const type = query.type as string;

    const status = await reviews.createReview(reviewId, tmdbId, type, values);

    if (status === 201) router.push("/review");
    else {
      // error popup
    }
  };

  return { values, setValues, initializeForm, onChangeForm, onSubmitForm };
};

export default useForm;
