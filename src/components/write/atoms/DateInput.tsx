import { ChangeEvent, useEffect, useState } from "react";

import styled from "styled-components";
import { theme } from "@styles/theme";

interface IProps {
  initialValue: string;
}

const DateInput = ({ initialValue }: IProps) => {
  const [date, setDate] = useState("");

  const onChangeDate = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setDate(target.value);
  };

  useEffect(() => {
    if (initialValue) setDate(initialValue);
  }, [initialValue]);

  return <Input type="datetime-local" value={date} onChange={onChangeDate} />;
};

export default DateInput;

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
