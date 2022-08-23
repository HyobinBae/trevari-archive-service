import React, { useEffect, useRef, useState } from 'react';
import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import Logo from 'svgs/Logo';
import Alarm from 'svgs/Alarm';

interface IProps {
  closeMenuWhenScrolled: boolean;
  hideAppBarWhenScrolled: boolean;
}

const TopNavigation = ({ closeMenuWhenScrolled, hideAppBarWhenScrolled }: IProps) => {
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

  return (
    <Base>
      <AppBar>
        <BarInstance to={'/'}>
          <Logo width={78} height={14} fill={'#000'} />
        </BarInstance>
        <BarInstance to={'/alarm'}>
          <Alarm />
        </BarInstance>
      </AppBar>
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

export default TopNavigation;

const Base = styled.div``;

const AppBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
`;

const BarInstance = styled(Link)`
  display: flex;
  align-items: center;
`;
