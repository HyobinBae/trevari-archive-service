import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import FooterComp from 'components/layout/Footer';
import TopNavigation from 'components/layout/TopNavigation';
import BottomNavigation from 'components/layout/BottomNavigation';

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <Base>
      <CenterContents>
        <TopNavigation closeMenuWhenScrolled={true} hideAppBarWhenScrolled={true} />
        {children}
        <FooterComp />
        <BottomNavigation />
      </CenterContents>
    </Base>
  );
};

export default Layout;

const Base = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background: #eeeeee;
  ${({ theme }) => theme.breakPoint.mobile} {
    width: 100%;
    height: 100%;
  }
`;

const CenterContents = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 500px;
  width: 100vh;
  height: 100vh;
  overflow: hidden;
  background: #ffffff;
  filter: drop-shadow(0px 0px 20px rgba(130, 130, 130, 0.15));
`;
