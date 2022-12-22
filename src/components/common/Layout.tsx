import { ReactNode } from "react";
import styled from "styled-components";

import { SkeletonTheme } from "react-loading-skeleton";
import Header from "./Header";
import Footer from "./Footer";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <SkeletonTheme baseColor="#2e2e2e" highlightColor="#444">
      <Header />
      <Wrap>{children}</Wrap>
      <Footer />
    </SkeletonTheme>
  );
};

export default Layout;

const Wrap = styled.div`
  min-height: 100vh;
  padding: 8rem 4rem 7rem 4rem;
`;
