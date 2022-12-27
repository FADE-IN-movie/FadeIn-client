import api from "./api";

const url = "/ranking";

const ranking = {
  getRank: async (
    genre: string,
    type: string,
    sortBy: string,
    page: number
  ) => {
    const params = {
      genre: genre,
      type: type,
      sortBy: sortBy,
      page: page,
    };

    const res = await api.get(`${url}`, {
      params: params,
    });

    return res.data.ranking;
  },
};

export default ranking;
