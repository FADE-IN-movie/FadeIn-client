import React, { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
}

function Menu({ children }: IProps) {
  return <Li>{children}</Li>;
}

export default Menu;

const Li = styled.li`
  font-size: 1.4rem;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
