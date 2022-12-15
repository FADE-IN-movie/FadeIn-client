import { useEffect, useState } from "react";
import useSWRInfinite from "swr/infinite";
import ranking from "@lib/api/ranking";

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
  const { data, isValidating, mutate, size, setSize } = useSWRInfinite<
    IContentInfo[]
  >(
    (pageIdx) => {
      if (isReachingEnd) return null;
      return [pageIdx];
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

  useEffect(() => {
    if (!data) return;
    setRankingData(() => data.flat());
  }, [data]);

  useEffect(() => {
    console.log(genre, type);
    mutate();
  }, [genre, type, sortBy, mutate]);

  return {
    ranking: rankingData || null,
    isSameSize: rankingData.length === size * 20,
    isValidating,
    isReachingEnd,
    size,
    setSize,
  };
};

export default useRank;
