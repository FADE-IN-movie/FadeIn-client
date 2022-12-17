import { ReactNode } from "react";
import styled from "styled-components";

import { SkeletonTheme } from "react-loading-skeleton";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <Wrap>
      <SkeletonTheme baseColor="#2e2e2e" highlightColor="#444">
        {children}
      </SkeletonTheme>
    </Wrap>
  );
};

export default Layout;

const Wrap = styled.div`
  min-height: 100vh;
  padding: 8rem 4rem 7rem 4rem;
`;
