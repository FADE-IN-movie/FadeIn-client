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
  border: 1px solid gray;

  &:first-child {
    color: #ff5050;
  }

  &:last-child {
    color: #6060ff;
  }
`;
