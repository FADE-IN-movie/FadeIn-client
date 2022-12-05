import useSWR from "swr";
import reviews from "@lib/api/reviewsAPI";

import { useRecoilValue } from "recoil";
import { selectedDateState } from "@states/reviews";

const useReviews = () => {
  const { year, month } = useRecoilValue(selectedDateState);
  const { data, error } = useSWR(
    year && month ? ["reviews", year, month] : null,
    () => reviews.getReviews(year, month)
  );

  return {
    reviews: data ? data.review : null,
    isLoading: !data,
    isError: error,
  };
};

export default useReviews;
