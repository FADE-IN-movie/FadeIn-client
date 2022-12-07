import useSWR from "swr";
import reviews from "@lib/api/reviewsAPI";

import { useRecoilValue } from "recoil";
import { selectedDateState } from "@states/reviews";
import { IReviewInfo } from "@typings/info";

const useReviews = () => {
  const { year, month } = useRecoilValue(selectedDateState);
  const { data, error, mutate } = useSWR(
    year && month ? ["reviews", year, month] : null,
    () => reviews.getReviews(year, month)
  );

  const deleteReview = (reviewId: string) => {
    if (reviewId === "") return;

    reviews
      .deleteReview(reviewId)
      .then(() => {
        const newData = data.review.filter(
          (review: IReviewInfo) => review.reviewId !== reviewId
        );

        mutate({ review: newData }, false);
      })
      .catch((err) => {
        console.dir(err);
      });
  };

  return {
    reviews: data ? data.review : null,
    isLoading: !data,
    isError: error,
    deleteReview,
  };
};

export default useReviews;
