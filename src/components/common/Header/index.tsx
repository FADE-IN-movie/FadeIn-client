import React from "react";
import styled from "styled-components";

import Logo from "./atoms/Logo";
import MenuList from "./molecules/NavMenuList";
import UserBox from "./organisms/UserBox";
import SearchBar from "./molecules/SearchBar";

function NavBar() {
  return (
    <Wrap>
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
    </Wrap>
  );
}

export default NavBar;

const Wrap = styled.div``;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;

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
