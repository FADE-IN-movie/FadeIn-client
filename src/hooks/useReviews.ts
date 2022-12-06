import useSWR from "swr";
import reviews from "@lib/api/reviewsAPI";

import { useRecoilValue } from "recoil";
import { selectedDateState } from "@states/reviews";

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
        mutate(); //
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
