import { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
}

const CustomTitle = ({ children }: IProps) => {
  return <Title>{children}</Title>;
};

export default CustomTitle;

const Title = styled.h2`
  font-size: 2rem;
`;
