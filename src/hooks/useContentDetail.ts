import { useRouter } from "next/router";

import useSWR from "swr";
import contents from "@lib/api/contentsAPI";

const useContentDetail = () => {
  const { query } = useRouter();
  const tmdbId = Number(query.id);
  const type = query.type as string;
  const { data, error, mutate } = useSWR(
    tmdbId && type ? ["contentDetail", tmdbId, type] : null,
    () => contents.getDetail(tmdbId, type),
    {
      revalidateOnFocus: false,
    }
  );

  const toggleLike = () => {
    const { currentLike } = data;

    contents
      .toggleLike(currentLike, tmdbId, type)
      .then(() => {
        mutate(
          {
            ...data,
            currentLike: !currentLike,
          },
          false
        );
      })
      .catch((err) => {
        console.dir(err);
      });
  };

  return {
    data: data ? data.data : null,
    cast: data ? data.cast : null,
    similarContent: data ? data.similarContent : null,
    currentLike: data ? data.currentLike : null,
    isLoading: !data,
    isError: error,
    toggleLike,
  };
};

export default useContentDetail;
