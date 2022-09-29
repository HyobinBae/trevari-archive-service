import React from 'react';
import styled from '@emotion/styled';
import TREVARI_APP_IMAGE from 'images/TREVARI_APP.png';
import { useMobileDetect } from 'hooks/useDetectMobile';

interface IProps {
  onClosePopup: (noMoreShowPopupToday: boolean) => void;
}

const AppDownloadPopup = ({ onClosePopup }: IProps) => {
  const mobileDetect = useMobileDetect();

  const onClickDynamicLink = () => {
    if (mobileDetect.isIos()) {
      window.location.href = 'https://itunes.apple.com/app/id1638663578';
    } else if (mobileDetect.isAndroid()) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.app.trevari.prod';
    }
    onClosePopup(false);
  };

  const onClickWeb = () => {
    onClosePopup(true);
  };

  return (
    <>
      <AppDownloadPopupContainer>
        <AppImageWrapper>
          <img src={TREVARI_APP_IMAGE} width="84" />
          <div>
            클럽, 이벤트 신청부터
            <br />
            독후감 작성까지
            <br />
            모두 가능한 앱에서 만나요!
          </div>
        </AppImageWrapper>
        <GoToAppButton onClick={onClickDynamicLink}>앱으로 보기</GoToAppButton>
        <MaintainWebButton onClick={onClickWeb}>오늘은 그냥 볼게요.</MaintainWebButton>
      </AppDownloadPopupContainer>
      <OverlayComp />
    </>
  );
};

export default AppDownloadPopup;

const AppDownloadPopupContainer = styled.div`
  padding: 50px 20px 50px 20px;
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 500px;
  z-index: 20;
  height: 293px;
  background: ${({ theme }) => theme.colors.white};
`;

const AppImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  font-weight: 700;
  font-size: 20px;
`;

const GoToAppButton = styled.div`
  width: 100%;
  background: black;
  height: 48px;
  margin-bottom: 18px;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

const MaintainWebButton = styled.div`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.gray600};
  font-weight: 500;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
  cursor: pointer;
`;

const OverlayComp = styled.div`
  position: absolute;
  background: #000000;
  opacity: 0.4;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 15;
`;
