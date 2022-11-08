import { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return <Wrap>{children}</Wrap>;
};

export default Layout;

const Wrap = styled.div`
  min-height: 100vh;
  padding: 8rem 4rem 7rem 4rem;
`;
