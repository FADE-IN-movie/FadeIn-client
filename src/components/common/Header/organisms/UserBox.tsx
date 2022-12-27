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
    const onClickHandler = ({ target }: Event) => {
      if (!boxRef.current || !target) return;
      clickOutside(target, boxRef.current, setIsListOpen);
    };

    document.addEventListener("mousedown", onClickHandler);
    return () => document.removeEventListener("mousedown", onClickHandler);
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
