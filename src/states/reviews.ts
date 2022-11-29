import { atom } from "recoil";
import { IReviewInfo } from "@typings/info";
import { IDate } from "@typings/date";

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

export const todayDateState = atom<IDate>({
  key: "todayDateState",
  default: {
    year: 0,
    month: 0,
    date: 0,
  },
});

export const selectedDateState = atom<IDate>({
  key: "selectedDateState",
  default: {
    year: 0,
    month: 0,
    date: 0,
  },
});
