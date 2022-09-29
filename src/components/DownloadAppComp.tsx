import React from 'react';
import AppIntroduce from 'components/svgs/AppIntroduce';
import AppQRCode from 'components/svgs/AppQRCode';
import { useWindowSize } from 'hooks/useWindowSize';
import {
  AppQRCodeDiv,
  AppQRCodeTextDiv,
  DownloadAppCompDiv,
  DownloadAppText,
  ViewMoreText,
} from 'components/layout/style';

const DownloadAppComp = () => {
  const { width } = useWindowSize();

  return (
    <>
      {width > 1248 && (
        <DownloadAppCompDiv>
          <AppIntroduce />
          <AppQRCodeDiv>
            <AppQRCode />
            <AppQRCodeTextDiv>
              <ViewMoreText>클럽, 이벤트 신청부터<br/>독후감 작성까지</ViewMoreText>
              <DownloadAppText>모두 가능한 앱에서 만나요!</DownloadAppText>
            </AppQRCodeTextDiv>
          </AppQRCodeDiv>
        </DownloadAppCompDiv>
      )}
    </>
  );
};

export default DownloadAppComp;
