import { useRouter } from "next/router";

import useSWR from "swr";
import contents from "@lib/api/contentsAPI";

const useContentDetail = () => {
  const { query } = useRouter();
  const tmdbId = Number(query.id);
  const type = query.type as string;
  const { data, error } = useSWR("contentDetail", () =>
    contents.getDetail(tmdbId, type)
  );

  return {
    data: data ? data.data : null,
    cast: data ? data.cast : null,
    similarContent: data ? data.similarMovie : null,
    currentLike: data ? data.currentLike : null,
    isLoading: !data,
    isError: error,
  };
};

export default useContentDetail;
