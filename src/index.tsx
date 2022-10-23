import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global-styles';
import { BrowserRouter } from 'react-router-dom';
import { AllRoutes } from './routes/Routes';
import { store } from './store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
);
