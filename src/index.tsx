import React from 'react';
import ReactDOM from 'react-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TrevariThemeProvider } from '@trevari/react-emotion-theme';

import EnhancedRouter from 'router';
import reportWebVitals from './reportWebVitals';
import 'styles/index.css';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <TrevariThemeProvider>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <EnhancedRouter />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </TrevariThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
