import { ChangeEvent, RefObject } from "react";
import styled, { css } from "styled-components";
import { theme } from "@styles/theme";

interface IProps {
  inputRef?: RefObject<HTMLInputElement>;
  isVisible?: boolean;
  search?: boolean;
  main?: boolean;
  width: string;
  placeholderText: string;
  value: string;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface InputPropsType {
  isVisible?: boolean;
  search?: boolean;
  main?: boolean;
  width: string;
  spellCheck: boolean;
}

function CustomInput({
  inputRef,
  isVisible,
  search,
  main,
  width,
  placeholderText,
  value,
  handleChangeInput,
}: IProps) {
  return (
    <Input
      type="text"
      spellCheck={false}
      ref={inputRef}
      isVisible={isVisible}
      search={search}
      main={main}
      width={width}
      value={value}
      placeholder={placeholderText}
      onChange={handleChangeInput}
    />
  );
}

export default CustomInput;

const Input = styled.input<InputPropsType>`
  display: ${(props) => (props.isVisible ? "inline-block" : "none")};
  display: ${(props) => props.main && "inline-block"};
  background: ${theme.palette.gray};
  width: ${(props) => props.width};
  padding: 0.6rem 1.2rem;
  padding-right: ${(props) => props.search && "3.8rem"};
  color: ${theme.text_color};
  border-radius: 5px;

  ${(props) =>
    props.main &&
    css`
      background: rgba(255, 255, 255, 0.14);
      padding: 0.8rem 1.6rem;
      font-size: 1.5rem;
      border-radius: 12px;
      line-height: 1.15;
    `};

  &::placeholder {
    color: #949494;
  }
`;
