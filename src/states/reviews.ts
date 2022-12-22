import { atom } from "recoil";
import { IDate } from "@typings/date";

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
