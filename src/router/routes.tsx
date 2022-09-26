import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import loadable, { DefaultComponent } from '@loadable/component';

import ScrollToTop from 'utils/scrollToTop';
import Layout from 'components/layout';
import { useAppDispatch, useAppSelector } from 'services/store';
import { selectAuthenticated, selectUserId, validateAuth } from 'services/auth/auth.store';
import { storage } from 'api';
import Loading from 'components/base/Loading';
import { getUser } from 'services/user/user.api';
import { GUEST_TOKEN } from 'config';

type Loader<T> = (props: T) => Promise<DefaultComponent<T>>;

function Loadable<T>(loader: Loader<T>, opt = {}) {
  return loadable(loader, { fallback: <Loading />, ...opt });
}

const Main = Loadable(() => import('pages/main'));
const LoadingP = Loadable(() => import('components/base/LoadingPage'));

export default () => {
  const dispatch = useAppDispatch();
  const authenticated = useSelector(selectAuthenticated);
  const userId = useAppSelector(selectUserId);

  const _validateAuth = useCallback(() => dispatch(validateAuth(storage.getToken$() || GUEST_TOKEN)), [dispatch]);

  useEffect(() => {
    if (!authenticated) {
      _validateAuth();
    } else {
      dispatch(getUser.initiate(userId));
    }
  }, [authenticated]);

  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route index element={<Main />} />
        <Route path="*" element={<LoadingP />} />
      </Routes>
    </Layout>
  );
};
