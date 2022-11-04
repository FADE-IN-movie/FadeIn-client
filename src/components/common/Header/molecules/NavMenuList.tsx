import Link from "next/link";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { currentPageState } from "@states/pages";

import NavMenu from "../atoms/NavMenu";

function NavMenuList() {
  const currentPage = useRecoilValue(currentPageState);

  return (
    <List>
      <Link href="/movie">
        <a>
          <NavMenu isActive={currentPage === "movie"}>영화</NavMenu>
        </a>
      </Link>
      <Link href="/tv">
        <a>
          <NavMenu isActive={currentPage === "tv"}>TV 프로그램</NavMenu>
        </a>
      </Link>
      <Link href="/rank">
        <a>
          <NavMenu isActive={currentPage === "rank"}>랭킹</NavMenu>
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
