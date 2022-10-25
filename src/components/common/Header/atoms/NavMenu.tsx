import { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
}

function NavMenu({ children }: IProps) {
  return <Menu>{children}</Menu>;
}

export default NavMenu;

const Menu = styled.li`
  font-size: 1.4rem;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
