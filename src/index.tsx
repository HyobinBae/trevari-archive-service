import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReactFbq from 'react-fbq';

import { TrevariThemeProvider } from '@trevari/react-emotion-theme';
import { init as initApm } from '@elastic/apm-rum';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import EnhancedRouter from 'router';
import {store} from 'services/store';

import reportWebVitals from './reportWebVitals';
import 'styles/index.css';
import { PIXEL_ID } from 'pages/main/pixel';
import {getToken} from "./utils/auth";
import {validateAuth} from "./services/auth/auth.store";

export const persistor = persistStore(store);

// eslint-disable-next-line @typescript-eslint/no-unused-vars

// if (IS_PRODUCTION) {
  export const myApm = initApm({
    serviceName: 'trevari-web',
    serverUrl: process.env.ELASTIC_APM_SERVER_URL,
    serviceVersion: '',
    environment: 'hyejin',
  });
  ReactFbq.initialize({ id: PIXEL_ID });

// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TrevariThemeProvider
          breakPoint={{
            mobile: '@media (min-width: 0px) and (max-width: 3600px)',
            tablet: '2400',
            desktop: '100',
            exceptMobile: '3600',
            exceptTable: '3600',
            exceptDesktop: '3600',
          }}
        >
          <EnhancedRouter />
        </TrevariThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
