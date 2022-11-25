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
};

export default contents;
