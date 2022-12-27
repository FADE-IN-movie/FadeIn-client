import { useCallback, useEffect, useState } from "react";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import search from "@lib/api/searchAPI";

import { useRecoilValue } from "recoil";
import { searchTypeState, searchKeywordState } from "@states/search";
import { IContentInfo } from "@typings/info";

const useSearch = () => {
  const [searchData, setSearchData] = useState<IContentInfo[]>([]);
  const type = useRecoilValue(searchTypeState);
  const keyword = useRecoilValue(searchKeywordState);
  const { data, error, isValidating, size, setSize } = useSWRInfinite<
    IContentInfo[]
  >(
    (pageIdx) => {
      if (!type || !keyword) return null;
      return [pageIdx, type, keyword];
    },
    (pageIdx) => search.searchKeyword(type, keyword, pageIdx + 1),
    {
      revalidateOnFocus: false,
      revalidateAll: false,
      revalidateFirstPage: false,
    }
  );
  const { data: resultCnt } = useSWR(
    keyword ? ["searchResultCnt", keyword] : null,
    () => search.getSearchResultCnt(keyword),
    {
      revalidateOnFocus: false,
    }
  );
  const PAGE_SIZE = 20;
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty ||
    (data && data.length && data[data.length - 1].length < PAGE_SIZE) ||
    false;

  const resetData = useCallback(() => setSearchData([]), []);
  const setFormmatedData = useCallback(() => {
    if (data) setSearchData(() => data.flat());
  }, [data]);

  useEffect(() => resetData(), [type, keyword, resetData]);

  useEffect(() => {
    const isInitialized = searchData.length === 0;

    if (isInitialized && data && data.flat().length > 0) {
      setFormmatedData();
    }
  }, [searchData, data, setFormmatedData]);

  useEffect(() => {
    if (data) setFormmatedData();
  }, [size, data, setFormmatedData]);

  return {
    search: searchData || null,
    resultCnt: resultCnt || null,
    isLoading: !data,
    isValidating,
    isSameSize: searchData.length === size * PAGE_SIZE,
    isReachingEnd,
    isError: error,
    size,
    setSize,
  };
};

export default useSearch;
