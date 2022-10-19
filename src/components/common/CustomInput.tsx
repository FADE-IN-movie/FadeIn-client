import styled from "styled-components";
import { theme } from "@styles/theme";

interface IProps {
  search?: boolean;
}

interface InputPropsType {
  search?: boolean;
}

function CustomInput({ search }: IProps) {
  return <Input search={search} placeholder="dd" />;
}

export default CustomInput;

const Input = styled.input<InputPropsType>`
  background: ${theme.palette.gray};
  width: 23rem;
  padding: 0.6rem 1.2rem;
  padding-right: ${(props) => props.search && "3.8rem"};
  color: ${theme.text_color};
  border-radius: 5px;

  &::placeholder {
    color: #949494;
  }
`;
