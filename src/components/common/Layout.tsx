import { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
}

function Layout({ children }: IProps) {
  return <Wrap>{children}</Wrap>;
}

export default Layout;

const Wrap = styled.div`
  margin: 8rem 4rem 7rem 4rem;
`;
