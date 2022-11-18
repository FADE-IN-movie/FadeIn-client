import { atom } from "recoil";
import { IReviewInfo } from "@typings/info";

export const reviewDetailState = atom<IReviewInfo>({
  key: "reviewDataState",
  // default: {},
});
