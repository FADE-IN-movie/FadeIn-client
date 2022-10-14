import React, { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
}

function Th({ children }: IProps) {
  return <StyledTh>{children}</StyledTh>;
}

export default Th;

const StyledTh = styled.th`
  font-size: 1.2rem;
  &:first-child {
    color: #fa3b3b;
  }
  &:last-child {
    color: #5151ff;
  }
`;
