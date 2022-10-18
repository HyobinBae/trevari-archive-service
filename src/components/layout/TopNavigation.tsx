import React, { useEffect, useRef, useState } from 'react';
import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import cn from 'classnames';
import { Link, useNavigate } from 'react-router-dom';

import Logo from 'components/svgs/Logo';
import { AppBar } from '@trevari/business-components';
import AlarmButton from 'pages/main/components/AlarmButton';
import { useNavigation } from 'hooks/useNavigation';
import { ButtonWrapper, Title } from 'components/layout/style';
import Arrow from 'components/svgs/Arrow';

interface IProps {
  closeMenuWhenScrolled: boolean;
  hideAppBarWhenScrolled: boolean;
}

const TopNavigation = ({ closeMenuWhenScrolled, hideAppBarWhenScrolled }: IProps) => {
  const navigate = useNavigate();
  const { title, path, showBackButton } = useNavigation();
  const [hideAppbar, setHideAppbar] = useState(false);
  const [open, setOpen] = useState(false);
  const [whiteBackground, setWhiteBackground] = useState(false);

  const scrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      if (closeMenuWhenScrolled && open) {
        setOpen(false);
      }
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setWhiteBackground(false);
      } else {
        setWhiteBackground(true);
      }

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

  const onClickBackButton = () => {
    navigate(-1);
  };

  const renderLeftContents = () => {
    return showBackButton ? (
      <ButtonWrapper onClick={onClickBackButton}>
        <Arrow direction={'left'} />
      </ButtonWrapper>
    ) : title === '홈' ? (
      <BarInstance to={'/'}>
        <Logo width={78} height={14} fill={'#000'} />
      </BarInstance>
    ) : (
      <BarInstance to={path}>
        <Title>{title}</Title>
      </BarInstance>
    );
  };

  return (
    <Base>
      <AppBarWrapper hide={hideAppbar}>
        <AppBarContainer
          className={cn({ on: whiteBackground })}
          position={hideAppBarWhenScrolled ? 'relative' : 'fixed'}
          on={whiteBackground}
          logo={renderLeftContents()}
          actions={<AlarmButton />}
        />
      </AppBarWrapper>

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

const Base = styled.div`
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100%;
`;

const AppBarWrapper = styled.div<{ hide: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  max-width: 500px;
  transition: transform 250ms;
  transform: ${({ hide }) => (hide ? `translate3d(0, -100%, 0)` : `translate3d(0, 0, 0)`)};
`;

const AppBarContainer = styled(AppBar)<{ on: boolean }>`
  background: ${({ on, theme }) => (on ? theme.colors.white : 'transparent')};

  .trevari-container {
    background: transparent;
  }

  .on .trevari-container {
    background: white;
  }
`;

const BarInstance = styled(Link)`
  display: flex;
  align-items: center;
  color: black;
`;
