import useSWR from "swr";

import { useRecoilValue } from "recoil";
import { currentPageState } from "@states/pages";
import contents from "@lib/api/contentsAPI";

const useContents = () => {
  const page = useRecoilValue(currentPageState);
  const { data, isValidating } = useSWR(
    page ? ["recommendContents", page] : null,
    () => contents.getRecommendContents(page),
    {
      dedupingInterval: 600000,
    }
  );

  return {
    data: data,
    isLoading: !data,
    isValidating,
  };
};

export default useContents;
