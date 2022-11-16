import { atom, selector } from "recoil";
import { currentPageState } from "./pages";
import contents from "@lib/api/contentsAPI";

import { IContentDetailInfo, IContentInfo } from "@typings/info";

export const recommendContentsQuery = selector({
  key: "recommendContentsQuery",
  get: async ({ get }) => {
    const page = get(currentPageState);
    const res = await contents.getRecommendContents(page);
    return res.data;
  },
});

export const contentDetailInfoState = atom<IContentDetailInfo>({
  key: "contentDetailInfoState",
  default: {
    data: {
      id: 0,
      type: "",
      title: "",
      genre: [],
      poster: "",
    },
    cast: [],
    similarContent: [],
  },
});

export const isKakaoInitState = atom({
  key: "isKakaoInitState",
  default: false,
});
