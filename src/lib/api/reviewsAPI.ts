import api from "./api";

const url = "/reviews";

const reviews = {
  getWritePage: async (
    reviewId: string | null,
    tmdbId: number,
    type: string
  ) => {
    const res = await api.get(`${url}`, {
      params: {
        reviewId: reviewId,
        tmdbId: tmdbId,
        type: type,
      },
    });

    return res.data;
  },
};

export default reviews;
