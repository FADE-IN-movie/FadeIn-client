import React from "react";
import styled from "styled-components";
import { theme } from "@styles/theme";

import Logo from "./atoms/Logo";
import MenuList from "./molecules/NavMenuList";
import UserBox from "./organisms/UserBox";
import SearchBar from "./molecules/SearchBar";

function Header() {
  return (
    <Container>
      <div className="box leftBox ">
        <Logo />
        <MenuList />
      </div>
      <div className="box rightBox">
        <SearchBar />
        <UserBox />
      </div>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${theme.bg_color};
  width: 100%;
  padding: 0 4rem;
  height: 6rem;

  .box {
    display: flex;
    align-items: center;
  }

  .leftBox {
    gap: 2.5rem;
  }

  .rightBox {
    gap: 4rem;
  }
`;
