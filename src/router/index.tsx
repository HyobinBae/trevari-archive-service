import React, { ReactNode } from 'react';
import { History } from 'history';
import Routes from 'router/routes';

interface Props {
  history: History;
  children?: ReactNode;
}
export const EnhancedRouter = ({ history }: Props) => <Routes />;
export default EnhancedRouter;
