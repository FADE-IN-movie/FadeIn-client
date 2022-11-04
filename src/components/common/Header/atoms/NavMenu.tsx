import { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
  isActive: boolean;
}

type MenuPropsType = {
  isActive: boolean;
};

function NavMenu({ children, isActive }: IProps) {
  return <Menu isActive={isActive}>{children}</Menu>;
}

export default NavMenu;

const Menu = styled.li<MenuPropsType>`
  font-size: 1.4rem;
  opacity: ${(props) => (props.isActive ? 1 : 0.7)};

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
