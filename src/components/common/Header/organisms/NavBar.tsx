import React from "react";
import styled from "styled-components";

import Logo from "../../Logo";
import MenuList from "../molecules/NavMenuList";

function NavBar() {
  return (
    <div>
      <Logo />
      <MenuList />
    </div>
  );
}

export default NavBar;
