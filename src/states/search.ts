import { atom, selector } from "recoil";
import { IContentInfo } from "@typings/info";
import search from "@lib/api/searchAPI";

export const searchTypeState = atom({
  key: "searchTypeState",
  default: "movie",
});

export const searchKeywordState = atom({
  key: "searchKeywordState",
  default: "",
});

export const searchKeywordQuery = selector<IContentInfo>({
  key: "searchKeywordQuery",
  get: async ({ get }) => {
    const type = get(searchTypeState);
    const keyword = get(searchKeywordState);

    if (keyword.trim() === "") return null;
    const res = await search.searchKeyword(type, keyword);
    return res.data;
  },
});

export const searchResultCntQuery = selector({
  key: "searchResultCntQuery",
  get: async ({ get }) => {
    const keyword = get(searchKeywordState);

    if (keyword.trim() === "") return null;
    return await search.getSearchResultCnt(keyword);
  },
});
