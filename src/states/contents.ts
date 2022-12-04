import { atom } from "recoil";

export const isKakaoInitState = atom({
  key: "isKakaoInitState",
  default: false,
});

export const isShareModalOpenState = atom({
  key: "isShareModalOpenState",
  default: false,
});
