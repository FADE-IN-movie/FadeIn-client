import { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
}

function Grid({ children }: IProps) {
  return <Layout>{children}</Layout>;
}

export default Grid;

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem 1rem;
`;
