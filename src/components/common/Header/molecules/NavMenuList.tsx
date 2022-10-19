import styled from "styled-components";

import NavMenu from "../atoms/NavMenu";

function NavMenuList() {
  return (
    <List>
      <NavMenu>영화</NavMenu>
      <NavMenu>TV 프로그램</NavMenu>
      <NavMenu>랭킹</NavMenu>
    </List>
  );
}

export default NavMenuList;

const List = styled.ul`
  display: flex;
  gap: 1.5rem;
`;
