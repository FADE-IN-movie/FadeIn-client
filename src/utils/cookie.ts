import Cookies from "universal-cookie";

const cookies = new Cookies();

export const setCookie = (name: string, value: string) => {
  cookies.set(name, value, { path: "/" });
};

export const removeCookie = (name: string) => {
  cookies.remove(name, { path: "/" });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};
