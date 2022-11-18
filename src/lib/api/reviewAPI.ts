import api from "./api";

const url = "/reviews";

const reviews = {
  getWritePage: async (contentId: number, type: string) => {
    return api.get(`${url}/${contentId}`, {
      params: {
        type: type,
      },
    });
  },
};

export default reviews;
