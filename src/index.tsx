import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { TrevariThemeProvider } from '@trevari/react-emotion-theme';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { init as initApm } from '@elastic/apm-rum';

import EnhancedRouter from 'router';
import { store } from 'services/store';
import LoadingPage from 'components/base/LoadingPage';

import reportWebVitals from './reportWebVitals';
import 'styles/index.css';
import { HelmetProvider } from 'react-helmet-async';
import TagManager from 'react-gtm-module';
import { GOOGLE_TAG_MANAGER_CONTAINER_ID } from 'pages/main/ga';

const persistor = persistStore(store);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const apm = initApm({
  serviceName: 'trevari-web',
  serverUrl: 'https://c0b7c3d540624325a041607b770d97ad.apm.ap-northeast-2.aws.elastic-cloud.com:443',
  serviceVersion: '',
  environment: process.env.NODE_ENV,
});

TagManager.initialize({ gtmId: GOOGLE_TAG_MANAGER_CONTAINER_ID });

ReactDOM.render(
  <Suspense fallback={<LoadingPage />}>
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
            <HelmetProvider>
              <EnhancedRouter />
            </HelmetProvider>
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
