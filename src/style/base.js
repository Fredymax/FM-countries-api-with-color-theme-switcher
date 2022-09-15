import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .debugger,
  .debugger * {
    outline: 1px solid red;
  }

  body {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 14px;
  }
`;

export default GlobalStyle;
