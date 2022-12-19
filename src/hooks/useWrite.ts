import useSWR from "swr";
import { useRouter } from "next/router";
import reviews from "@lib/api/reviewsAPI";

const useWrite = () => {
  const { query } = useRouter();
  const tmdbId = Number(query.contentId);
  const type = query.type as string;
  const reviewId = (query.reviewId as string) || null;
  const { data, error, isValidating } = useSWR(
    type && tmdbId ? ["write", reviewId, tmdbId, type] : null,
    () => reviews.getWritePage(reviewId, tmdbId, type),
    {
      revalidateOnFocus: false,
    }
  );

  return {
    content: data ? data.content : null,
    review: data ? data.review : null,
    isLoading: !data,
    isValidating,
    isError: error,
  };
};

export default useWrite;
