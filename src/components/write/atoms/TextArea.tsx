import styled from "styled-components";
import { theme } from "@styles/theme";

const TextArea = () => {
  return <StyledTextArea rows={5} spellCheck={false} />;
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
