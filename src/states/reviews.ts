import { atom } from "recoil";
import { IReviewContentInfo } from "@typings/info";

export const reviewDetailState = atom<IReviewContentInfo>({
  key: "reviewDataState",
  default: { id: 0, title: "", poster: "", backdrop: "", originalTitle: "" },
});
