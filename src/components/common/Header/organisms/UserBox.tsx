import { useState } from "react";
import styled from "styled-components";

import UserImg from "../atoms/UserImg";
import UserMenuList from "../molecules/UserMenuList";

function UserBox() {
  const [isListOpen, setIsListOpen] = useState(false);

  const onToggleList = () => setIsListOpen((prev) => !prev);

  return (
    <Box onClick={onToggleList}>
      <UserImg />
      {isListOpen && <UserMenuList />}
    </Box>
  );
}

export default UserBox;

const Box = styled.div``;
