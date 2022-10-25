import styled from "styled-components";

import { theme } from "@styles/theme";

function Logo() {
  return <LogoTitle>FADE-IN</LogoTitle>;
}

export default Logo;

const LogoTitle = styled.div`
  font-family: ${theme.fonts.logo};
  color: ${theme.logo_color};
  font-size: 3rem;
`;
