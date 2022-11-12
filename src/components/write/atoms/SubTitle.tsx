import { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
}

const SubTitle = ({ children }: IProps) => {
  return <Title>{children}</Title>;
};

export default SubTitle;

const Title = styled.h3`
  font-size: 1.7rem;
`;
