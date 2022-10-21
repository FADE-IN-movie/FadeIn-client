import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface IProps {
  children: ReactNode;
  outline?: boolean;
  color: string;
  textColor?: string;
}

type ButtonPropsType = {
  outline?: boolean;
  color: string;
};

function CustomBtn({ children, outline, color }: IProps) {
  return (
    <Button outline={outline} color={color}>
      {children}
    </Button>
  );
}

export default CustomBtn;

const Button = styled.button<ButtonPropsType>`
  padding: 1rem 2rem;
  border: 1px solid gray;
  min-width: 10rem;
  border-radius: 30px;

  ${(props) => {
    if (!props.outline)
      return css`
        background: ${props.color};
      `;
  }}
`;
