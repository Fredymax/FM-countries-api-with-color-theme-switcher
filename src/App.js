import React, { Fragment, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from 'context/ThemeContext';
import GlobalStyle from 'style/base';
import WebRoutes from 'routes/web';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <WebRoutes />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
