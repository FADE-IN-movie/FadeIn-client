import { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
}

const Th({ children }: IProps) => {
  return <StyledTh>{children}</StyledTh>;
}

export default Th;

const StyledTh = styled.th`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.5rem;

  &:first-child {
    color: #ff5050;
  }

  &:last-child {
    color: #6060ff;
  }
`;
