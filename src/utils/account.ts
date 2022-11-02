import { AxiosRequestConfig } from "axios";
import { getCookie, removeCookie, setCookie } from "./cookie";
import { setRecoil, resetRecoil } from "recoil-nexus";
import moment from "moment";
import { loggedUserState } from "@states/user";
import { IUser } from "@typings/user";

import api from "src/lib/api/api";
import auth from "@lib/api/authAPI";

interface ITokenInfo {
  accessToken: string;
  refreshToken: string;
  accessTokenExp: string;
  refreshTokenExp: string;
}

export function signIn(info: IUser & ITokenInfo) {
  const {
    userName,
    userEmail,
    userImg,
    accessToken,
    refreshToken,
    accessTokenExp,
    refreshTokenExp,
  } = info;

  if (
    !(
      userName ||
      userEmail ||
      userImg ||
      accessToken ||
      refreshToken ||
      accessTokenExp ||
      refreshTokenExp
    )
  )
    return;

  setCookie("accessToken", accessToken);
  setCookie("refreshToken", refreshToken);
  setCookie("accessTokenExp", accessTokenExp);
  setCookie("refreshTokenExp", refreshTokenExp);
  setCookie("userName", userName);
  setCookie("userEmail", userEmail);
  setCookie("userImg", userImg);

  setRecoil(loggedUserState, {
    userName: userName,
    userEmail: userEmail,
    userImg: userImg,
  });

  window.location.replace("/");
}

export function signOut() {
  removeCookie("accessToken");
  removeCookie("accessTokenExp");
  removeCookie("refreshToken");
  removeCookie("refreshTokenExp");
  removeCookie("userName");
  removeCookie("userEmail");
  removeCookie("userImg");

  resetRecoil(loggedUserState);
  setAuthorizationToken();
}

export function googleSignIn() {
  const handleCallback = (res: any) => {
    auth.signIn("google", res.credential);
  };

  //@ts-ignore
  google.accounts.id.initialize({
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    callback: handleCallback,
  });

  //@ts-ignore
  google.accounts.id.renderButton(document.getElementById("googleIdLogin"), {
    theme: "outline",
    size: "large",
    logo_alignment: "left",
    width: 250,
  });

  //@ts-ignore
  google.accounts.id.prompt();
}

export function naverSignIn() {
  const initializeNaver = () => {
    //@ts-ignore
    const signIn = new naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET,
      callbackUrl: process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI,
      isPopup: false,
      loginButton: { color: "green", type: 3, height: 40, width: 250 },
    });

    signIn.init();
  };

  initializeNaver();
}

export async function verifyToken(config: AxiosRequestConfig<any>) {
  const refreshToken = getCookie("refreshToken");
  const accessTokenExp = moment(getCookie("accessTokenExp")).format(
    "YYYY-MM-DD HH:mm:ss.SSSS"
  );
  const refreshTokenExp = moment(getCookie("refreshTokenExp")).format(
    "YYYY-MM-DD HH:mm:ss.SSSS"
  );
  const currentTime = moment().add("1", "h").format("YYYY-MM-DD HH:mm:ss.SSSS");

  if (refreshTokenExp < currentTime) {
    signOut();
    window.location.href = "/";
  } else if (accessTokenExp < currentTime && refreshToken) {
    setAuthorizationToken();

    const { accessToken, accessTokenExp } = await auth.getNewToken(
      refreshToken
    );
    setAuthorizationToken(accessToken);
    removeCookie("accessToken");
    removeCookie("accessTokenExp");
    setCookie("accessToken", accessToken);
    setCookie("accessTokenExp", accessTokenExp);
  }

  return config;
}

export function verifyTokenErrorHandler() {
  signOut();
}

export function setAuthorizationToken(accessToken?: ITokenInfo) {
  if (accessToken) {
    api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
}
