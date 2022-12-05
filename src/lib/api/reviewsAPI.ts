import { IReviewDataInfo } from "@typings/info";
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

  createReview: async (
    reviewId: string,
    tmdbId: number,
    type: string,
    formValues: IReviewDataInfo
  ) => {
    const body = {
      ...formValues,
      tmdbId: tmdbId,
      type: type,
    };

    const res = await api.post(`${url}/${reviewId}`, body);

    return res.status;
  },

  searchWriteKeyword: async (keyword: string, page: number) => {
    const params = {
      keyword: keyword,
      page: page,
    };

    const res = await api.get(`${url}/search`, {
      params: params,
    });

    return res.data;
  },

  getReviews: async (year: number, month: number) => {
    const params = {
      year: year,
      month: month,
    };

    const res = await api.get(`${url}/list`, {
      params: params,
    });

    return res.data;
  },
};

export default reviews;
