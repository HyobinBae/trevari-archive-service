import React from 'react';
import { Route, Routes } from 'react-router-dom';
import loadable, { DefaultComponent } from '@loadable/component';
import Loading from 'components/base/Loading';
import Viewer from '../pages/platform/components/Viewer';

type Loader<T> = (props: T) => Promise<DefaultComponent<T>>;

function Loadable<T>(loader: Loader<T>, opt = {}) {
  return loadable(loader, { fallback: <Loading />, ...opt });
}

const Platform = Loadable(() => import('pages/platform'));

export default () => {
  return (
    <Routes>
      <Route path="/platform/:platformID" element={<Platform />} />
      <Route path="/viewer" element={<Viewer />} />
    </Routes>
  );
};
