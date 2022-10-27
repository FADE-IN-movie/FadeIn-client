import api from "./api";
import { signIn } from "@utils/account";

const url = "/auth";

const auth = {
  signIn: async (provider: string, token: string) => {
    const { data, status } = await api.post(`${url}/${provider}`, token);
    if (status === 200) signIn(data);
  },
};

export default auth;
