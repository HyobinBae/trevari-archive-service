import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import loadable, { DefaultComponent } from '@loadable/component';

import ScrollToTop from 'utils/scrollToTop';
import Layout from 'components/layout';
import { useAppDispatch } from 'services/store';
import { selectAuthenticated, validateAuth } from 'services/auth/auth.store';
import { storage } from 'api';
import { GUEST_TOKEN } from 'config';
import LoadingPage from 'components/base/LoadingPage';

type Loader<T> = (props: T) => Promise<DefaultComponent<T>>;

function Loadable<T>(loader: Loader<T>, opt = {}) {
  return loadable(loader, { fallback: <LoadingPage />, ...opt });
}

const Main = Loadable(() => import('pages/main'));

const NoMatch = () => {
  return <p>페이지를 찾을 수 없습니다: 404!</p>;
};

export default () => {
  const dispatch = useAppDispatch();
  const authenticated = useSelector(selectAuthenticated);

  const _validateAuth = useCallback(() => dispatch(validateAuth(storage.getToken$() || GUEST_TOKEN)), [dispatch]);

  useEffect(() => {
    if (!authenticated) {
      _validateAuth();
    }
  }, [authenticated]);

  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route index element={<Main />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Layout>
  );
};
