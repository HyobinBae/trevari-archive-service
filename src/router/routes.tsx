import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import loadable, { DefaultComponent } from '@loadable/component';
import { isEmpty } from 'lodash';

import ScrollToTop from 'utils/scrollToTop';
import Layout from 'components/layout';
import { useAppDispatch, useAppSelector } from 'services/store';
import { selectAuthenticated, selectUserId, validateAuth } from 'services/auth/auth.store';
import { storage } from 'api';
import Loading from 'components/base/Loading';
import { getClubRoles, getUser } from 'services/user/user.api';
import { GUEST_TOKEN } from 'config';
import { logout } from 'services/user/user.store';
import WishList from 'pages/wishList';
import BookReviewShow from 'pages/bookreviews/show';

type Loader<T> = (props: T) => Promise<DefaultComponent<T>>;

function Loadable<T>(loader: Loader<T>, opt = {}) {
  return loadable(loader, { fallback: <Loading />, ...opt });
}

const Main = Loadable(() => import('pages/main'));
const Menu = Loadable(() => import('pages/menu'));
const Goods = Loadable(() => import('pages/goods'));
const External = Loadable(() => import('pages/external'));
const Curations = Loadable(() => import('pages/curations'));
const LoadingP = Loadable(() => import('components/base/LoadingPage'));

export default () => {
  const dispatch = useAppDispatch();
  const authenticated = useSelector(selectAuthenticated);
  const userId = useAppSelector(selectUserId);

  const _validateAuth = useCallback(() => dispatch(validateAuth(storage.getToken$() || GUEST_TOKEN)), [dispatch]);
  const _logout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (!authenticated) {
      if (isEmpty(storage.getToken$())) {
        _logout();
      }
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
        <Route path="/external" element={<External />} />
        <Route path="/curations/:curationId" element={<Curations />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/bookreviews/show/:bookreivewID" element={<BookReviewShow />} />
        <Route path="*" element={<LoadingP />} />
      </Routes>
    </Layout>
  );
};
