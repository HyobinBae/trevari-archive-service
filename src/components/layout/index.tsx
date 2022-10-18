import React, { ReactNode, useEffect, useState } from 'react';
import styled from '@emotion/styled';

import TopNavigation from 'components/layout/TopNavigation';
import BottomNavigation from 'components/layout/BottomNavigation';
import { useWindowSize } from 'hooks/useWindowSize';
import { Collapse, Toast } from '@trevari/components';
import { useLocation } from 'react-router-dom';

import { useAppSelector } from 'services/store';
import { selectToast } from 'services/ui.store';

interface IProps {
  hideTopNav?: boolean;
  hideBottomNav?: boolean;
  mode?: 'full' | 'center';
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  const { pathname } = useLocation();
  const { open, text, type, fade, autoClose } = useAppSelector(selectToast);
  const { width } = useWindowSize();
  const [viewMode, setViewMode] = useState<'center' | 'full'>('full');
  const [hideBottomNav, setHideBottomNav] = useState(false);

  useEffect(() => {
    if (pathname === '/goods') {
      setHideBottomNav(true);
    }
  }, [pathname]);

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
        <Item>
          <Collapse open={open} autoCollapseMs={3500} fade={fade} onAutoCallapse={autoClose ? () => ({}) : undefined}>
            <Toast status={type}>{text}</Toast>
          </Collapse>
        </Item>
        {viewMode === 'full' ? (
          <FullWindow>
            <TopNavigation closeMenuWhenScrolled={true} hideAppBarWhenScrolled={true} />
            {children}
            {!hideBottomNav && <BottomNavigation />}
          </FullWindow>
        ) : (
          <CenterWindow>
            <TopNavigation closeMenuWhenScrolled={true} hideAppBarWhenScrolled={true} />
            {children}
            {!hideBottomNav && <BottomNavigation />}
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

const Item = styled.div`
  position: fixed;
  top: 50px;
  z-index: 10;
  width: 100%;
  padding: 0 20px;
  .trevari-toast {
    max-width: 460px;
    width: 100%;
  }
`;
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
