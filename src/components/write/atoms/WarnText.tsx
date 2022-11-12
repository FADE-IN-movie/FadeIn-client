import { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
}

const WarnText = ({ children }: IProps) => {
  return <Text>{children}</Text>;
};

export default WarnText;

const Text = styled.span`
  font-size: 1.05rem;
  color: #707070;
`;
