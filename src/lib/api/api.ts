import axios from "axios";
import { verifyToken, verifyTokenErrorHandler } from "@utils/account";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

api.interceptors.request.use(verifyToken, verifyTokenErrorHandler);

export default api;
