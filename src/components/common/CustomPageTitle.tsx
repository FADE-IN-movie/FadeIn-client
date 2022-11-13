import { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
}

const CustomPageTitle = ({ children }: IProps) => {
  return <Title>{children}</Title>;
};

export default CustomPageTitle;

const Title = styled.h2`
  font-size: 2.5rem;
  margin: 0 0 6rem 0;
`;
