import { useRouter } from "next/router";
import styled from "styled-components";
import { signOut } from "@utils/account";

import UserMenu from "../atoms/UserMenu";

const UserMenuList = () => {
  const router = useRouter();

  return (
    <List>
      <UserMenu>찜 목록</UserMenu>
      <UserMenu handleClick={() => router.push("/review")}>내 감상평</UserMenu>
      <UserMenu handleClick={signOut}>로그아웃</UserMenu>
    </List>
  );
};

export default UserMenuList;

const List = styled.ul`
  position: absolute;
  top: 6rem;
  right: 4rem;
`;
