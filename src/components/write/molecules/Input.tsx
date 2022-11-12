import styled from "styled-components";
import { theme } from "@styles/theme";

const Input = () => {
  return (
    <Box>
      <StyledInput spellCheck="false" />
    </Box>
  );
};

export default Input;

const Box = styled.div``;

const StyledInput = styled.input`
  width: 25rem;
  background: ${theme.palette.gray};
  color: ${theme.text_color};
  line-height: 1.1;
  padding: 1rem 1.3rem;
  border-radius: 5px;
`;
