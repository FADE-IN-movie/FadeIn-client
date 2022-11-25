import { useEffect } from "react";
import styled from "styled-components";
import { theme } from "@styles/theme";

import useInput from "@hooks/useInput";

interface IProps {
  limit: number;
  initialValue: string;
}

const Input = ({ limit, initialValue }: IProps) => {
  const [value, setValue, onChangeValue] = useInput(initialValue);

  useEffect(() => setValue(initialValue), [initialValue, setValue]);

  return (
    <Box>
      <input
        type="text"
        spellCheck={false}
        maxLength={limit}
        value={value}
        onChange={onChangeValue}
      />
      <span className="limit">
        ( {value.length} / {limit} )
      </span>
    </Box>
  );
};

export default Input;

const Box = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;

  input {
    width: 25rem;
    background: ${theme.palette.gray};
    color: ${theme.text_color};
    line-height: 1.1;
    padding: 1rem 1.3rem;
    border-radius: 5px;
  }

  .limit {
    color: #dadada;
    font-size: 1.25rem;
  }
`;
