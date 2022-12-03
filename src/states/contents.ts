import { atom, selector } from "recoil";
import { currentPageState } from "./pages";
import contents from "@lib/api/contentsAPI";

import { IContentDetailInfo } from "@typings/info";

export const recommendContentsQuery = selector({
  key: "recommendContentsQuery",
  get: async ({ get }) => {
    const page = get(currentPageState);
    const res = await contents.getRecommendContents(page);
    return res.data;
  },
});

export const isKakaoInitState = atom({
  key: "isKakaoInitState",
  default: false,
});

export const isShareModalOpenState = atom({
  key: "isShareModalOpenState",
  default: false,
});
