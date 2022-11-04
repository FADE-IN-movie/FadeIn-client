import { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
  text: string;
  onClickHandler?: () => void;
}

function ContentActionBtn({ children, text, onClickHandler }: IProps) {
  return (
    <Button onClick={onClickHandler}>
      {children}
      <label>{text}</label>
    </Button>
  );
}

export default ContentActionBtn;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  label {
    cursor: pointer;
  }
`;
