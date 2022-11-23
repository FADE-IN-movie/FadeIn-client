import { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "@styles/theme";

interface IProps {
  children: ReactNode;
}

const Barcode = ({ children }: IProps) => {
  return <Text>{children}</Text>;
};

export default Barcode;

const Text = styled.div`
  width: 3.1em;
  height: 0.6em;
  overflow: hidden;
  font-family: ${theme.fonts.barcode};
  font-size: 5.5em;
  color: #2d2d2d;
  word-break: break-all;
  text-align: center;
  transform: rotate(90deg);
`;
