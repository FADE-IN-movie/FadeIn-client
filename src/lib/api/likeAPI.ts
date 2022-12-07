import api from "./api";

const url = "/like";

const like = {
  getLikeList: async () => {
    const res = await api.get(`${url}`);

    return res.data;
  },
};

export default like;
