import { useState } from "react";

import useSWR from "swr";
import search from "@lib/api/searchAPI";

import { useRecoilValue } from "recoil";
import { searchTypeState, searchKeywordState } from "@states/search";
import { useEffect } from "react";

const useSearch = () => {
  const [shouldFetch, setShouldFetch] = useState(false);
  const type = useRecoilValue(searchTypeState);
  const keyword = useRecoilValue(searchKeywordState);
  const { data, error } = useSWR(
    shouldFetch ? ["search", type, keyword] : null,
    () => search.searchKeyword(type, keyword)
  );

  useEffect(() => {
    type && keyword ? setShouldFetch(true) : setShouldFetch(false);
  }, [type, keyword]);

  return {
    search: data ? data.search : null,
    isLoading: !data,
    isError: error,
  };
};

export default useSearch;
