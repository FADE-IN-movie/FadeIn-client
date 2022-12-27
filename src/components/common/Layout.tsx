import { ReactNode } from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <Header />
      <Wrap>{children}</Wrap>
      <Footer />
    </>
  );
};

export default Layout;

const Wrap = styled.div`
  min-height: 100vh;
  padding: 8rem 4rem 7rem 4rem;
`;
