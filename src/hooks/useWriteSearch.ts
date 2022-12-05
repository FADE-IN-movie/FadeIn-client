import { useState, useEffect } from "react";

import useSWR from "swr";
import reviews from "@lib/api/reviewsAPI";

import { useRecoilValue } from "recoil";
import { writeSearchKeywordState } from "@states/reviews";

const useSearch = () => {
  const keyword = useRecoilValue(writeSearchKeywordState);
  const { data, error } = useSWR(
    keyword ? ["search", keyword] : null,
    () => reviews.searchWriteKeyword(keyword, 1),
    {
      revalidateOnFocus: false,
    }
  );

  console.log(data);
  return {
    search: data ? data.search : null,
    total: data ? data.total : 0,
    isLoading: !data,
    isError: error,
  };
};

export default useSearch;
