import { ChangeEvent } from "react";

import styled from "styled-components";
import { theme } from "@styles/theme";

interface IProps {
  name: string;
  value: string;
  handleChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
}

const TimeInput = ({ name, value, handleChange }: IProps) => {
  return (
    <Input type="time" name={name} value={value} onChange={handleChange} />
  );
};

export default TimeInput;

const Input = styled.input`
  width: 25rem;
  background: ${theme.palette.gray};
  color: ${theme.text_color};
  padding: 1rem 1.3rem;
  line-height: 1.1;
  border-radius: 5px;

  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
`;
