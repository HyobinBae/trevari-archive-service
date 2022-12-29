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
import BetaBadge from 'components/svgs/BetaBadge';
import {ShareIcon} from "components/svgs/ShareIcon";
import {LinkIcon} from "components/svgs/LinkIcon";
import { heading7 } from '@trevari/typo';
import {useMobileDetect} from "../../hooks/useDetectMobile";
import {BottomSheet} from "react-spring-bottom-sheet";
import {useWindowSize} from "../../utils/windowResize";
import {shareApi} from "../../api/share";
import {toastAlert} from "../../services/ui.store";
import {MoreButtonItems} from "../../pages/main/components/MoreButtonItems";
import {clipboard} from "../../utils/clipboard";

interface IProps {
  closeMenuWhenScrolled: boolean;
  hideAppBarWhenScrolled: boolean;
}

const TopNavigation = ({ closeMenuWhenScrolled, hideAppBarWhenScrolled }: IProps) => {
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const { title, path, showBackButton } = useNavigation();
  const [hideAppbar, setHideAppbar] = useState(false);
  const [open, setOpen] = useState(false);
  const [whiteBackground, setWhiteBackground] = useState(false);
  const [isOpenMoreList, setOpenMoreList] = useState(false);

  const scrollY = useRef(0);

  const bottomSheetLeftMarginPx = width > 500 ? 'calc(50vw - 250px)' : 0;

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
    ) : title === '독후감' ? (
      <BarInstance to={path}>
        <TitleWrapper>
          <TitleSpan>독후감</TitleSpan>
          <BetaBadge />
        </TitleWrapper>
      </BarInstance>
    ) : (
      <BarInstance to={path}>
        <Title>{title}</Title>
      </BarInstance>
    );
  };

  const renderAppRightContents = () => {
    return(
      <>
        {renderRightContents()}&nbsp;&nbsp;&nbsp;<AlarmButton />
      </>
    )
  }

  const renderRightContents = () => {
    return isSharePath() ? (
        <ButtonWrapper onClick={onClickShareButton}>
            <ShareIcon/>
        </ButtonWrapper>
    ) : (<div/>);
  }

  const onClickShareButton = () => {
    setOpenMoreList(state => !state);
  }

  const MORE_ACTIONS = [
    {
      item: linkItem(),
      onAction: () => clip(),
    },
  ];

  const clip = async () => {
    const originUrl = window.location.href
    await clipboard.copyTextToClipboard(originUrl)
    toastAlert({
      open: true,
      type: 'done',
      text: '링크가 복사되었습니다.',
    });
    onDismiss();
  };

  const onDismiss = () => {
      setOpenMoreList(false);
  };

  const isApp = useMobileDetect().isApp();

  return (
    <Base>
      <AppBarWrapper hide={hideAppbar}>
        <AppBarContainer
          className={cn({ on: whiteBackground })}
          position={hideAppBarWhenScrolled ? 'relative' : 'fixed'}
          on={whiteBackground}
          logo={renderLeftContents()}
          actions={isApp ? renderAppRightContents() : renderRightContents()}
        />
      </AppBarWrapper>
      <BottomSheet
          open={isOpenMoreList}
          onDismiss={() => setOpenMoreList(state => !state)}
          style={{
            '--rsbs-ml': bottomSheetLeftMarginPx,
            '--rsbs-max-w': '500px',
          }}
      >
        <MoreButtonItems title={'공유하기'} actions={MORE_ACTIONS} />
      </BottomSheet>
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
  z-index: 2;
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
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const TitleSpan = styled.div`
  margin-right: 4px;
  ${heading7};
`;

const ItemWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 56px;
  height: 56px;
  left: 0px;
  top: 0px;
  border: 1px solid #ECECE9;
  border-radius: 100%;
`;

const ItemDetailWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const linkItem = () => {
    return (
        <ItemWrapper>
          <ItemDetailWrapper>
              <LinkIcon/>
          </ItemDetailWrapper>
        </ItemWrapper>
    );
}

const isSharePath = (): boolean => {
    const currentPath = window.location.href;
    return currentPath.includes("/bookreviews/show");
}