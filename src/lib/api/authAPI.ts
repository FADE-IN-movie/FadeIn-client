import api from "./api";

const url = "/auth";

const auth = {
  signIn: async (provider: string, token: string) => {
    const res = await api.post(`${url}/${provider}`, token);

    return res.data;
  },
};

export default auth;
