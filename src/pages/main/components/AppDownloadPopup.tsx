import React from 'react';
import styled from '@emotion/styled';
import TREVARI_APP_IMAGE from '../../../images/TREVARI_APP.png';
import { Overlay } from '@trevari/components/lib/Overlay';

interface IProps {
  onClosePopup: () => void;
}

const AppDownloadPopup = ({onClosePopup}: IProps) => {
  const onClickDynamicLink = () => {
    console.log('앱 링크로 가기');
    // if (userAgent === 'iOS') {
    //   goToIOSAppstoreLink()
    // } else if (userAgent === 'AOS') {
    //   goToAOSPlaystoreLinke()
    // }
  };

  const onClickWeb = () => {
    console.log('onClickWeb');
    onClosePopup();
  }

  return (
    <>
      <AppDownloadPopupContainer>
        <AppImageWrapper>
          <img src={TREVARI_APP_IMAGE} width='84' />
          <div>
            클럽, 이벤트 신청부터<br/>
            독후감 작성까지<br/>
            모두 가능한 앱에서 만나요!
          </div>

        </AppImageWrapper>
        <GoToAppButton onClick={onClickDynamicLink}>
          앱으로 보기
        </GoToAppButton>
        <MaintainWebButton onClick={onClickWeb}>
          오늘은 그냥 볼게요.
        </MaintainWebButton>
      </AppDownloadPopupContainer>
      {/*<Overlay />*/}
      <OverlayComp />
    </>
  )
}

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
