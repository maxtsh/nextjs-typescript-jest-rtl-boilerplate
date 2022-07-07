import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{
    --pm-text: #000;
  }

  *{
    box-sizing: border-box;
  }

  html,body{
    margin: 0;
    padding:0 ;
  }
`;

export default GlobalStyles;
