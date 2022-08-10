import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import Navigation from 'components/layout/Navigation';
import FooterComp from 'components/layout/Footer';

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <Base>
      <Navigation closeMenuWhenScrolled={true} hideAppBarWhenScrolled={true} />
      {children}
      <FooterComp />
    </Base>
  );
};

export default Layout;

const Base = styled.div`
  width: 100%;
  height: 100%;
`;
