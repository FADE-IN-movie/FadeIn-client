import { atom } from "recoil";

export const selectedMenuState = atom({
  key: "selectedMyListMenuState",
  default: "movie",
});

export const selectedGenreState = atom({
  key: "selectedGenreState",
  default: { value: "all", text: "장르 전체" },
});

export const selectedTypeState = atom({
  key: "selectedTypeState",
  default: { value: "movie", text: "영화" },
});

export const selectedSortMenuState = atom({
  key: "selectedSortMenuState",
  default: "popularity",
});
