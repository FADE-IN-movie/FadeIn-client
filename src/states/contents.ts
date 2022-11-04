import { selector } from "recoil";
import { currentPageState } from "./pages";
import contents from "@lib/api/contentsAPI";

export const recommendContentsQuery = selector({
  key: "recommendContentsQuery",
  get: async ({ get }) => {
    const page = get(currentPageState);
    if (page === "rank") return;
    const res = await contents.getRecommendContents(page);
    return res.data;
  },
});
