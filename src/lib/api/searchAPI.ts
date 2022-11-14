import api from "./api";

const url = "/search";

const search = {
  searchKeyword: async (type: string, keyword: string) => {
    return await api.get(`${url}`, {
      params: {
        type: type,
        keyword: keyword,
      },
    });
  },
};

export default search;
