import api from "./api";

const url = "/contents";

const contents = {
  getContents: async (type: string) => {
    return api.get(`${url}`, {
      params: {
        type: type,
      },
    });
  },
};

export default contents;
