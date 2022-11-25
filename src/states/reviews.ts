import { atom } from "recoil";
import { IReviewInfo } from "@typings/info";

export const reviewDetailState = atom<IReviewInfo>({
  key: "reviewDetailState",
  default: {
    content: {
      tmdbId: 0,
      title: "",
      originalTitle: "",
    },
    review: {
      rating: 0,
    },
  },
});
