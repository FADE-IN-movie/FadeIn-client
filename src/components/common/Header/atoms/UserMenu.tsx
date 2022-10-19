import { ReactNode } from "react";
import styled from "styled-components";

import { theme } from "@styles/theme";

interface IProps {
  children: ReactNode;
}

function UserMenu({ children }: IProps) {
  return <Menu>{children}</Menu>;
}

export default UserMenu;

const Menu = styled.li`
  font-size: 1.3rem;
  background: ${theme.palette.dark_gray};
  width: 15rem;
  padding: 1.5rem;
  cursor: pointer;

  &:hover {
    background: ${theme.palette.gray};
  }

  &:first-child {
    border-radius: 5px 5px 0 0;
  }

  &:last-child {
    border-radius: 0 0 5px 5px;
    border-top: 1px solid ${theme.palette.muted_gray};
  }
`;
