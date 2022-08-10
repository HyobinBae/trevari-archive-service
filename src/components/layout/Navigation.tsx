import React, { useEffect, useRef, useState } from 'react';
import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import { resetAnchorCss } from '@trevari/components';
import { AppBar, AppBarNavigation, AppBarNavigationItem } from '@trevari/business-components';
import Logo from 'images/TREVARI.png';

interface IProps {
  closeMenuWhenScrolled: boolean;
  hideAppBarWhenScrolled: boolean;
}

const Navigation = ({ closeMenuWhenScrolled, hideAppBarWhenScrolled }: IProps) => {
  const [hideAppbar, setHideAppbar] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const scrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      if (closeMenuWhenScrolled && open) {
        setOpen(false);
      }
      const currentScrollY = window.scrollY;

      // for iOS bouncing scroll behavior
      if (currentScrollY < 50) {
        hideAppbar && setHideAppbar(false);
      } else {
        const isScrollDown = scrollY.current < currentScrollY;

        hideAppbar !== isScrollDown && setHideAppbar(isScrollDown);
      }
      scrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [closeMenuWhenScrolled, hideAppbar, open]);

  const appbarInstance = (
    <AppBar
      position={hideAppBarWhenScrolled ? 'relative' : 'fixed'}
      onClickMenu={() => setOpen(open => !open)}
      actions={<div>test</div>}
      logo={
        <HomeAnchor>
          <LogoImg src={Logo} />
        </HomeAnchor>
      }
      navigation={
        <AppBarNavigation menuOpen={open} onCloseMenuOpen={handleClose} className="appbar-navigation-example">
          <AppBarNavigationItem selected>모든 클럽 보기</AppBarNavigationItem>
          <AppBarNavigationItem>다른 클럽 놀러가기</AppBarNavigationItem>
          <AppBarNavigationItem>이벤트</AppBarNavigationItem>
        </AppBarNavigation>
      }
    />
  );

  return (
    <Base>
      {hideAppBarWhenScrolled ? <AppBarWrapper hide={hideAppbar}>{appbarInstance}</AppBarWrapper> : appbarInstance}
      <Global
        styles={css`
          body {
            padding: 0 !important;
          }
        `}
      ></Global>
    </Base>
  );
};

export default Navigation;

const Base = styled.div`
  padding-top: 100px;
`;
const AppBarWrapper = styled.div<{ hide: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  transition: transform 250ms;
  transform: ${({ hide }) => (hide ? `translate3d(0, -100%, 0)` : `translate3d(0, 0, 0)`)};
`;
const HomeAnchor = styled.a(resetAnchorCss, { display: 'flex' });
const LogoImg = styled.img`
  height: 18px;
  ${({ theme }) => theme.breakPoint.mobile} {
    height: 14px;
  }
`;
