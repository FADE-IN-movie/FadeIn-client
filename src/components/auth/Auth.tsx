import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { loggedUserState } from "@states/users";
import { getCookie } from "@utils/cookie";
import { setAuthorizationToken } from "@utils/account";

const Auth = () => {
  const setLoggedUser = useSetRecoilState(loggedUserState);

  const getUserInfo = () => {
    const accessToken = getCookie("accessToken");
    const refreshToken = getCookie("refreshToken");
    const userEmail = getCookie("userEmail");
    const userName = getCookie("userName");
    const userImg = getCookie("userImg");

    return { accessToken, refreshToken, userEmail, userName, userImg };
  };

  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo.accessToken === undefined) return;

    const { accessToken, userEmail, userName, userImg } = userInfo;

    setAuthorizationToken(accessToken);
    setLoggedUser({
      userName: userName,
      userEmail: userEmail,
      userImg: userImg,
    });
  }, [setLoggedUser]);

  return <div></div>;
};

export default Auth;
