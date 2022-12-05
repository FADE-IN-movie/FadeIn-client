import api from "./api";

const url = "/search";

const search = {
  searchKeyword: async (type: string, keyword: string) => {
    const res = await api.get(`${url}`, {
      params: {
        type: type,
        keyword: keyword,
      },
    });

    return res.data;
  },
  getSearchResultCnt: async (keyword: string) => {
    const { data } = await api.get(`${url}/length`, {
      params: {
        keyword: keyword,
      },
    });

    return {
      movie: data.movieLength,
      tv: data.tvLength,
      total: data.movieLength + data.tvLength,
    };
  },
};

export default search;
