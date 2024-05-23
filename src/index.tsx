import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import { GlobalFont } from './styles/GlobalFont';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
const queryClient = new QueryClient();

root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <GlobalFont />
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  </ThemeProvider>,
);
