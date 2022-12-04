import { atom, selector } from "recoil";
import search from "@lib/api/searchAPI";

export const searchTypeState = atom({
  key: "searchTypeState",
  default: "movie",
});

export const searchKeywordState = atom({
  key: "searchKeywordState",
  default: "",
});

export const searchResultCntQuery = selector({
  key: "searchResultCntQuery",
  get: async ({ get }) => {
    const keyword = get(searchKeywordState);

    if (keyword.trim() === "") return null;
    return await search.getSearchResultCnt(keyword);
  },
});
