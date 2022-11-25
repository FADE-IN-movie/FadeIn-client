import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { theme } from "@styles/theme";

interface IProps {
  children: ReactNode;
  side: string;
}

type BarcodePropsType = {
  side: string;
};

const Barcode = ({ children, side }: IProps) => {
  return <Text side={side}>{children}</Text>;
};

export default Barcode;

const Text = styled.div<BarcodePropsType>`
  font-family: ${theme.fonts.barcode};
  color: ${theme.dark_text_color};
  word-break: break-all;
  text-align: center;
  overflow: hidden;
  font-size: 5.5em;

  ${(props) => {
    if (props.side === "front")
      return css`
        width: 3.1em;
        height: 0.6em;
        transform: rotate(90deg);
      `;
    else
      return css`
        width: 2.2em;
        height: 0.45em;
      `;
  }}
`;
