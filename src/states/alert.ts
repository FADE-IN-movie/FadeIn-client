import { atom } from "recoil";

export const successAlertState = atom({
  key: "successAlertState",
  default: "",
});

export const errorAlertState = atom({
  key: "errorAlertState",
  default: "",
});
