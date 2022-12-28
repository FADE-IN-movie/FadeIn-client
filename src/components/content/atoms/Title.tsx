import { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
}

const Title = ({ children }: IProps) => {
  return <CustomTitle>{children}</CustomTitle>;
};

export default Title;

const CustomTitle = styled.h1`
  font-size: 3.5rem;
  line-height: 1.15;
`;
