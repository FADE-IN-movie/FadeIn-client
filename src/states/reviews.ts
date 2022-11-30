import { atom, selector } from "recoil";
import { IReviewInfo } from "@typings/info";
import { IDate } from "@typings/date";

import reviews from "@lib/api/reviewsAPI";

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

export const isCalendarOpenState = atom({
  key: "isCalendarOpenState",
  default: true,
});

export const writeSearchKeywordState = atom({
  key: "writeSearchKeywordState",
  default: "",
});

export const writeSearchKeywordQuery = selector({
  key: "writeSearchKeywordQuery",
  get: async ({ get }) => {
    const keyword = get(writeSearchKeywordState);

    if (keyword === "") return null;
    return await reviews.searchWriteKeyword(keyword, 1);
  },
});
