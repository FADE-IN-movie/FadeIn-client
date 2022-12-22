import { useState, useEffect } from "react";

import useSWR from "swr";
import reviews from "@lib/api/reviewsAPI";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { successAlertState, errorAlertState } from "@states/alert";
import { selectedDateState } from "@states/reviews";
import { IReviewInfo } from "@typings/info";

const useReviews = () => {
  const { year, month } = useRecoilValue(selectedDateState);
  const { data, error, isValidating, mutate } = useSWR(
    year && month ? ["reviews", year, month] : null,
    () => reviews.getReviews(year, month)
  );
  const setSuccessAlert = useSetRecoilState(successAlertState);
  const setErrorAlert = useSetRecoilState(errorAlertState);

  const onDeleteReview = (reviewId: string) => {
    if (reviewId === "") return;

    reviews
      .deleteReview(reviewId)
      .then(() => {
        const newData = data.review.filter(
          (review: IReviewInfo) => review.reviewId !== reviewId
        );

        mutate({ review: newData }, false);
        setSuccessAlert("리뷰 삭제가 완료되었습니다.");
      })
      .catch(() => {
        setErrorAlert("리뷰를 삭제하지 못했습니다. 다시 시도해주세요.");
      });
  };

  return {
    reviews: data ? data.review : null,
    isLoading: !data,
    isValidating,
    isError: error,
    onDeleteReview,
  };
};

export default useReviews;
