import { atom } from "recoil";
import { IReviewDataInfo, IReviewContentInfo } from "@typings/info";
import { IDate } from "@typings/date";

export const reviewDetailState = atom<{
  review: IReviewDataInfo;
  content: IReviewContentInfo;
}>({
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

export const isCalendarOpenState = atom({
  key: "isCalendarOpenState",
  default: true,
});

export const writeSearchKeywordState = atom({
  key: "writeSearchKeywordState",
  default: "",
});
