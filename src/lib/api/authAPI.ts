import api from "./api";
import { signIn } from "@utils/account";

const url = "/auth";

const auth = {
  signIn: async (provider: string, token: string) => {
    const { data, status } = await api.post(`${url}/${provider}`, token);

    console.log(data);
    if (status === 200) signIn(data);
  },
  getNewToken: async (refreshToken: string) => {
    const res = await api.post(`${url}/refresh`, refreshToken);
    return res.data;
  },
};

export default auth;
