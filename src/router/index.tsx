import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from 'router/routes';
// import DownloadAppComp from 'pages/main/components/DownloadAppComp';

export const EnhancedRouter = () => {
  return (
    <BrowserRouter>
      <Routes />
      {/*<DownloadAppComp />*/}
    </BrowserRouter>
  );
};

export default EnhancedRouter;
