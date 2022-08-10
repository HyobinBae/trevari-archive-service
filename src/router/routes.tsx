import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import ScrollToTop from 'utils/scrollToTop';

const Loading = () => {
  return <div>loading</div>;
};

const Main = lazy(() => import('components/main'));

/* eslint max-len: 0, react/display-name: 0 */
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={Main} />
        <Route element={Loading} />
      </Routes>
    </>
  );
};
