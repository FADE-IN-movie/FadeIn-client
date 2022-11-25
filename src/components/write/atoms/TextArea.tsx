import { ChangeEvent, useEffect } from "react";
import styled from "styled-components";
import { theme } from "@styles/theme";

interface IProps {
  name: string;
  value: string;
  handleChange: ({ target }: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = ({ name, value, handleChange }: IProps) => {
  return (
    <StyledTextArea
      name={name}
      rows={5}
      spellCheck={false}
      value={value}
      onChange={handleChange}
    />
  );
};

export default TextArea;

const StyledTextArea = styled.textarea`
  background: ${theme.palette.gray};
  color: ${theme.text_color};
  width: 100%;
  resize: none;
  padding: 1.2rem 1.3rem;
  border-radius: 5px;
`;
