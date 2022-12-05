import useSWR from "swr";
import search from "@lib/api/searchAPI";

import { useRecoilValue } from "recoil";
import { searchTypeState, searchKeywordState } from "@states/search";

const useSearch = () => {
  const type = useRecoilValue(searchTypeState);
  const keyword = useRecoilValue(searchKeywordState);
  const { data, error } = useSWR(
    type && keyword ? ["search", type, keyword] : null,
    () => search.searchKeyword(type, keyword),
    {
      revalidateOnFocus: false,
    }
  );
  const { data: resultCnt } = useSWR(
    keyword ? ["searchResultCnt", keyword] : null,
    () => search.getSearchResultCnt(keyword),
    {
      revalidateOnFocus: false,
    }
  );

  return {
    search: data ? data.search : null,
    resultCnt: resultCnt || null,
    isLoading: !data,
    isError: error,
  };
};

export default useSearch;
