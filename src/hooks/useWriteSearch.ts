import { useState, useEffect, useCallback } from "react";

import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import reviews from "@lib/api/reviewsAPI";

import { useRecoilValue } from "recoil";
import { writeSearchKeywordState } from "@states/reviews";
import { IContentInfo } from "@typings/info";

const useWriteSearch = () => {
  const [searchData, setSearchData] = useState<IContentInfo[]>([]);
  const keyword = useRecoilValue(writeSearchKeywordState);
  const { data, error, isValidating, size, setSize } = useSWRInfinite<
    IContentInfo[]
  >(
    (pageIdx) => (keyword ? [pageIdx, keyword] : null),
    async (pageIdx) => {
      const { search } = await reviews.searchWriteKeyword(keyword, pageIdx + 1);
      return search;
    },
    {
      revalidateOnFocus: false,
      revalidateAll: false,
      revalidateFirstPage: false,
    }
  );
  const { data: resultCnt } = useSWR(
    keyword ? ["writeSearchResultCnt", keyword] : null,
    () => reviews.getWriteSearchResultCnt(keyword),
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

  useEffect(() => resetData(), [keyword, resetData]);

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
    resultCnt,
    isLoading: !data,
    isValidating,
    isSameSize: searchData.length === size * PAGE_SIZE,
    isReachingEnd,
    isError: error,
    setSize,
  };
};

export default useWriteSearch;
