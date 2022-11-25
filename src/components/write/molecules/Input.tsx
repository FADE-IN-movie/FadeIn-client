import { ChangeEvent } from "react";
import styled from "styled-components";
import { theme } from "@styles/theme";

interface IProps {
  name: string;
  value: string;
  limit: number;
  handleChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ name, value, limit, handleChange }: IProps) => {
  return (
    <Box>
      <input
        type="text"
        name={name}
        spellCheck={false}
        maxLength={limit}
        value={value}
        onChange={handleChange}
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
