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
import { getClubRoles, getUser } from 'services/user/user.api';
import { GUEST_TOKEN } from 'config';

type Loader<T> = (props: T) => Promise<DefaultComponent<T>>;

function Loadable<T>(loader: Loader<T>, opt = {}) {
  return loadable(loader, { fallback: <Loading />, ...opt });
}

const Main = Loadable(() => import('pages/main'));
const Menu = Loadable(() => import('pages/menu'));
const Goods = Loadable(() => import('pages/goods'));
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
      dispatch(
        getClubRoles.initiate({
          limit: 15,
          offset: 0,
          where: {
            userID: userId,
            isOpenPeriodRefundedRole: false,
          },
        }),
      );
    }
  }, [authenticated]);

  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/goods" element={<Goods />} />
        <Route path="*" element={<LoadingP />} />
      </Routes>
    </Layout>
  );
};
