import api from "./api";

const url = "/contents";

const contents = {
  getRecommendContents: async (type: string) => {
    return api.get(`${url}`, {
      params: {
        type: type,
      },
    });
  },
  getDetail: async (id: number, type: string) => {
    const res = await api.get(`${url}/${id}`, {
      params: {
        type: type,
      },
    });

    return res.data;
  },
  toggleLike: async (currentState: boolean, tmdbId: number, type: string) => {
    const body = {
      currentState: currentState,
      tmdbId: tmdbId,
      type: type,
    };

    const res = await api.post(`${url}/like`, body);

    return res.data;
  },
};

export default contents;
