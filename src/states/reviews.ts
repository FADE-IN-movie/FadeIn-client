import { atom } from "recoil";
import { IReviewContentInfo, IReviewInfo } from "@typings/info";

export const reviewContentState = atom<IReviewContentInfo>({
  key: "reviewContentState",
  default: { id: 0, title: "", poster: "", backdrop: "", originalTitle: "" },
});

export const reviewDataState = atom<IReviewInfo>({
  key: "reviewDataState",
  default: {
    watched_at: "",
    watched_in: "",
    watched_with: "",
    rating: 0,
    memo: "",
    comment: "",
  },
});
