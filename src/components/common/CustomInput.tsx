import styled, { css } from "styled-components";
import { theme } from "@styles/theme";

interface IProps {
  search?: boolean;
  main?: boolean;
  width: string;
  placeholderText: string;
}

interface InputPropsType {
  search?: boolean;
  main?: boolean;
  width: string;
}

function CustomInput({ search, main, width, placeholderText }: IProps) {
  return (
    <Input
      search={search}
      main={main}
      width={width}
      placeholder={placeholderText}
    />
  );
}

export default CustomInput;

const Input = styled.input<InputPropsType>`
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
    `}

  &::placeholder {
    color: #949494;
  }
`;
