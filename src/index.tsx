import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { TrevariThemeProvider } from '@trevari/react-emotion-theme';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import EnhancedRouter from 'router';
import { store } from 'store';

import reportWebVitals from './reportWebVitals';
import 'styles/index.css';

const persistor = persistStore(store);

ReactDOM.render(
  <Suspense fallback="loading...">
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <TrevariThemeProvider>
            <EnhancedRouter />
          </TrevariThemeProvider>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
