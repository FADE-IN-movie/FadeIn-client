import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'SF_HambakSnow';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2106@1.1/SF_HambakSnow.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
 
  * {
    box-sizing: border-box;
  }

  html {
    width: 100%;
    padding: 0;
    font-size: calc(7px + 0.3vw);
    /* font-size: 12px; */
    background: ${theme.bg_color};
  }

  body, button {
    font-family: ${theme.fonts.base};
    color: ${theme.text_color};
  }

  img {
    -webkit-user-drag: none;
  }

  button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    
    &:hover {
      opacity: 0.8;
    }
  }

  input {
    font-family: ${theme.fonts.base};
    outline: none;
    border: none;
  }

  a {
    text-decoration: none;
    color: ${theme.text_color};
  }

  h1, h2, h3, h4, h5 {
    font-weight: bold;
  }
`;
