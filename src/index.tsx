import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { AnimeHome } from './Pages/AnimeHome';
import { GlobalStyles } from './styles/global-styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AnimeHome />
  </ThemeProvider>,
);
