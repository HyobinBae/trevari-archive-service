import React from 'react';
import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';

import ScrollToTop from 'utils/scrollToTop';
import Layout from 'components/layout';

const Main = loadable(() => import('components/main'));
const Legacy = loadable(() => import('components/legacy'));

const NoMatch = () => {
  return <p>페이지를 찾을 수 없습니다: 404!</p>;
};

export default () => {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/menu" element={<Legacy />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Layout>
  );
};
