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

  @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Pangolin&display=swap');

  html {
    width: 100%;
    padding: 0;
    font-size: 12px;
  }

  body {
    font-family: 'Noto Sans KR', 'sans-serif';
  }

  img {
    -webkit-user-drag: none;
  }
`;
