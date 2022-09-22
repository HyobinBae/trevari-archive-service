import React, { ReactNode, useEffect, useState } from 'react';
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

const Layout = ({ children }: IProps) => {
  const { width } = useWindowSize();
  const [viewMode, setViewMode] = useState<'center' | 'full'>('full');

  useEffect(() => {
    if (width > 500) {
      setViewMode('center');
    } else {
      setViewMode('full');
    }
  }, [width]);

  return (
    <Base>
      <Body>
        {viewMode === 'full' ? (
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
      </Body>
    </Base>
  );
};

export default Layout;

const Base = styled.div`
  position: relative;
  margin: 0 auto;
  background: #eeeeee;
  max-width: 500px;
  width: 100%;
  min-height: 100vh;
  transition: margin-top 0.5s;
`;
const Body = styled.div``;

const CenterWindow = styled.div`
  max-width: 500px;
  width: 100vw;
  margin: auto;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 20px rgba(130, 130, 130, 0.15);
`;

const FullWindow = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
`;
