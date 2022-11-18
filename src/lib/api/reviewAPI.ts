import api from "./api";

const url = "/reviews";

const reviews = {
  getWritePage: async (contentId: number, type: string) => {
    const res = api.get(`${url}/${contentId}`, {
      params: {
        type: type,
      },
    });

    return (await res).data;
  },
};

export default reviews;
