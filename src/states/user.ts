import { atom, selector } from "recoil";

export const loggedUserState = atom({
  key: "loggedUserState",
  default: {
    userName: "",
    userImg: "",
    userEmail: "",
  },
});

export const isSignInState = selector<boolean>({
  key: "isSignInState",
  get: ({ get }) => {
    const userInfo = get(loggedUserState);
    return !(userInfo.userEmail === "" || !userInfo.userEmail);
  },
});
