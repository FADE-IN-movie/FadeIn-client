import { ChangeEvent, useState } from "react";

import styled from "styled-components";
import { theme } from "@styles/theme";

const DateInput = () => {
  const [date, setDate] = useState("");

  const onChangeDate = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setDate(target.value);
  };

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
