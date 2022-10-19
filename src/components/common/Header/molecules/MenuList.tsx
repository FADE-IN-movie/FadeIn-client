import styled from "styled-components";

import NavMenu from "../atoms/NavMenu";

function MenuList() {
  return (
    <List>
      <NavMenu>영화</NavMenu>
      <NavMenu>TV 프로그램</NavMenu>
      <NavMenu>랭킹</NavMenu>
    </List>
  );
}

export default MenuList;

const List = styled.ul`
  display: flex;
  gap: 1.5rem;
`;
