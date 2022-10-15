import React, { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
}

function Date({ children }: IProps) {
  return <Td>{children}</Td>;
}

export default Date;

const Td = styled.td`
  font-size: 1.2rem;
  padding: 1rem 2rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
