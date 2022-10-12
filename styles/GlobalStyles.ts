import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}

  html {
    width: 100%;
    padding: 0;
    font-size: 12px;
  }

  img {
    -webkit-user-drag: none;
  }
`;
