import { atom, selector } from "recoil";
import contents from "@lib/api/contentsAPI";

export const selectedTypeState = atom({
  key: "selectedTypeState",
  default: "movie",
});

export const recommendContentsQuery = selector({
  key: "recommendContentsQuery",
  get: async ({ get }) => {
    const res = await contents.getContents(get(selectedTypeState));
    return res.data;
  },
});
