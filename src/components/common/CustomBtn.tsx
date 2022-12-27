import { ReactNode, MouseEvent } from "react";
import styled, { css } from "styled-components";

interface IProps {
  children: ReactNode;
  outline?: boolean;
  color: string;
  textColor?: string;
  onClickHandler?: (e: MouseEvent<HTMLButtonElement>) => void;
}

type ButtonPropsType = {
  outline?: boolean;
  color: string;
  textColor?: string;
};

const CustomBtn = ({
  children,
  outline,
  color,
  textColor,
  onClickHandler,
}: IProps) => {
  return (
    <Button
      outline={outline}
      color={color}
      textColor={textColor}
      onClick={onClickHandler}
    >
      {children}
    </Button>
  );
};

export default CustomBtn;

const Button = styled.button<ButtonPropsType>`
  padding: 0.9rem 2.3rem;
  min-width: 11.5rem;
  line-height: 1.3;
  border-radius: 10px;
  font-size: 1.5rem;

  ${(props) => {
    if (props.outline)
      return css`
        border: 2px solid ${props.color};
        color: ${props.color};
        font-weight: bold;
      `;
    else
      return css`
        background: ${props.color};
      `;
  }}

  ${(props) =>
    props.textColor &&
    css`
      color: ${props.textColor};
    `}
`;
