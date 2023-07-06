import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './assets/style/global';
import theme from './assets/style/theme';
import IPTrackerProvider from './context/IPTrackerContext';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <IPTrackerProvider>
          <ToastContainer limit={1} />
          <App />
        </IPTrackerProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
