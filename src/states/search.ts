import { atom } from "recoil";

export const searchTypeState = atom({
  key: "searchTypeState",
  default: "movie",
});

export const searchKeywordState = atom({
  key: "searchKeywordState",
  default: "",
});
