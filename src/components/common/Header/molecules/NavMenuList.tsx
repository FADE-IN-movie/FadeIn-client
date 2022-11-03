import Link from "next/link";
import styled from "styled-components";

import NavMenu from "../atoms/NavMenu";

function NavMenuList() {
  return (
    <List>
      <Link href="/movie">
        <a>
          <NavMenu>영화</NavMenu>
        </a>
      </Link>
      <Link href="/tv">
        <a>
          <NavMenu>TV 프로그램</NavMenu>
        </a>
      </Link>
      <NavMenu>랭킹</NavMenu>
    </List>
  );
}

export default NavMenuList;

const List = styled.ul`
  display: flex;
  gap: 1.5rem;
  z-index: 10;
`;
