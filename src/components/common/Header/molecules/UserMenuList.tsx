import styled from "styled-components";

import UserMenu from "../atoms/UserMenu";

function UserMenuList() {
  return (
    <List>
      <UserMenu>찜 목록</UserMenu>
      <UserMenu>내가 ... 기록</UserMenu>
      <UserMenu>로그아웃</UserMenu>
    </List>
  );
}

export default UserMenuList;

const List = styled.ul`
  position: absolute;
  top: 6rem;
  right: 4rem;
`;
