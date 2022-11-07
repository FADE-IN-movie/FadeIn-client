import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import NavMenu from "../atoms/NavMenu";

function NavMenuList() {
  const { query } = useRouter();

  return (
    <List>
      <Link href="/movie">
        <a>
          <NavMenu isActive={query.type === "movie"}>영화</NavMenu>
        </a>
      </Link>
      <Link href="/tv">
        <a>
          <NavMenu isActive={query.type === "tv"}>TV 프로그램</NavMenu>
        </a>
      </Link>
      <Link href="/rank">
        <a>
          <NavMenu isActive={query.type === "rank"}>랭킹</NavMenu>
        </a>
      </Link>
    </List>
  );
}

export default NavMenuList;

const List = styled.ul`
  display: flex;
  gap: 1.5rem;
  z-index: 10;
`;
