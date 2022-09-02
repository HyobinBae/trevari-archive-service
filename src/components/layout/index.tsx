import React, { ReactNode, useEffect } from 'react';
import styled from '@emotion/styled';

import TopNavigation from 'components/layout/TopNavigation';
import BottomNavigation from 'components/layout/BottomNavigation';
import { useWindowSize } from 'hooks/useWindowSize';

interface IProps {
  hideTopNav?: boolean;
  hideBottomNav?: boolean;
  mode?: 'full' | 'center';
  children: ReactNode;
}

const Layout = ({ children, mode = 'center', hideTopNav = false, hideBottomNav = false }: IProps) => {
  const { width } = useWindowSize();
  const isMobile = width < 769;

  useEffect(() => {
    console.log('isMobile', isMobile);
  }, []);

  return (
    <Base>
      {isMobile ? (
        <FullWindow>
          <TopNavigation closeMenuWhenScrolled={true} hideAppBarWhenScrolled={true} />
          {children}
          <BottomNavigation />
        </FullWindow>
      ) : (
        <CenterWindow>
          <TopNavigation closeMenuWhenScrolled={true} hideAppBarWhenScrolled={true} />
          {children}
          <BottomNavigation />
        </CenterWindow>
      )}
    </Base>
  );
};

export default Layout;

const Base = styled.div`
  position: relative;
  margin: 0 auto;
  background: #eeeeee;
  ${({ theme }) => theme.breakPoint.mobile} {
    width: 100%;
    height: 100%;
  }
`;

const CenterWindow = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 500px;
  width: 100vh;
  height: 100vh;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
  filter: drop-shadow(0px 0px 20px rgba(130, 130, 130, 0.15));
`;

const FullWindow = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
`;
