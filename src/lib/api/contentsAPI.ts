import api from "./api";

const url = "/contents";

const contents = {
  getMovies: async () => {
    const res = await api.get(`${url}`);
  },
};

export default contents;
