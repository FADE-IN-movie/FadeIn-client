import { useCallback, useEffect, useState } from "react";
import useSWRInfinite from "swr/infinite";
import ranking from "@lib/api/rankingAPI";

import { useRecoilValue } from "recoil";
import { IContentInfo } from "@typings/info";
import {
  selectedGenreState,
  selectedTypeState,
  selectedSortMenuState,
} from "@states/menus";

const useRank = () => {
  const [rankingData, setRankingData] = useState<IContentInfo[]>([]);
  const genre = useRecoilValue(selectedGenreState);
  const type = useRecoilValue(selectedTypeState);
  const sortBy = useRecoilValue(selectedSortMenuState);
  const { data, isValidating, size, setSize } = useSWRInfinite<IContentInfo[]>(
    (pageIdx) => {
      if (isReachingEnd || !genre || !type || !sortBy) return null;
      return [pageIdx, genre, type, sortBy];
    },
    (pageIdx) => ranking.getRank(genre.value, type.value, sortBy, pageIdx + 1),
    {
      revalidateOnFocus: false,
      revalidateAll: false,
      revalidateFirstPage: false,
    }
  );
  const PAGE_SIZE = 20;
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty ||
    (data && data.length && data[data.length - 1].length < PAGE_SIZE) ||
    false;

  const resetData = useCallback(() => setRankingData([]), []);
  const setFormmatedData = useCallback(() => {
    if (data) setRankingData(() => data.flat());
  }, [data]);

  useEffect(() => resetData(), [type, genre, sortBy, resetData]);

  useEffect(() => {
    const isInitialized = rankingData.length === 0;
    if (isInitialized && data) setFormmatedData();
  }, [rankingData, data, setFormmatedData]);

  useEffect(() => {
    if (data) setFormmatedData();
  }, [size, data, setFormmatedData]);

  return {
    ranking: rankingData || null,
    isLoading: !data,
    isSameSize: Number(rankingData.length / PAGE_SIZE) === size,
    isValidating,
    isReachingEnd,
    size,
    setSize,
  };
};

export default useRank;
