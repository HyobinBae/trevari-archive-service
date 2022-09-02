import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from 'router/routes';

export const EnhancedRouter = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default EnhancedRouter;
