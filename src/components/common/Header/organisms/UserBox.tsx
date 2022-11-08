import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { clickOutside } from "@utils/display";

import UserImg from "../atoms/UserImg";
import UserMenuList from "../molecules/UserMenuList";

const UserBox = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const onToggleList = () => setIsListOpen((prev) => !prev);

  useEffect(() => {
    if (!boxRef.current) return;
    clickOutside(boxRef.current, setIsListOpen);
  }, [boxRef]);

  return (
    <Box ref={boxRef} onClick={onToggleList}>
      <UserImg />
      {isListOpen && <UserMenuList />}
    </Box>
  );
};

export default UserBox;

const Box = styled.div``;
