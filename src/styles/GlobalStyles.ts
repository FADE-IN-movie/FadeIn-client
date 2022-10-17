import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

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
    font-size: 12px;
  }

  body, button {
    font-family: 'Noto Sans KR', 'sans-serif';
    color: #191F29;
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
`;
