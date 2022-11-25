import styled from "styled-components";
import { theme } from "@styles/theme";

import useInput from "src/hooks/useInput";
import { useEffect } from "react";

interface IProps {
  initialValue: string;
}

const TextArea = ({ initialValue }: IProps) => {
  const [value, setValue, onChangeValue] = useInput("");

  useEffect(() => {
    if (initialValue) setValue(initialValue);
  }, [initialValue, setValue]);

  return (
    <StyledTextArea
      rows={5}
      spellCheck={false}
      value={value}
      onChange={onChangeValue}
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
