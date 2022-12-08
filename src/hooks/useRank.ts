import useSWR from "swr";
import ranking from "@lib/api/ranking";

import { useRecoilValue } from "recoil";
import {
  selectedGenreState,
  selectedTypeState,
  selectedSortMenuState,
} from "@states/menus";

const useRank = () => {
  const genre = useRecoilValue(selectedGenreState);
  const type = useRecoilValue(selectedTypeState);
  const sortBy = useRecoilValue(selectedSortMenuState);
  const { data } = useSWR(
    [genre && type && sortBy ? ["rank", genre, type, sortBy] : null],
    () => ranking.getRank(genre.value, type.value, sortBy, 1),
    {
      revalidateOnFocus: false,
    }
  );

  return {
    ranking: data ? data.ranking : null,
    isLoading: !data,
  };
};

export default useRank;
