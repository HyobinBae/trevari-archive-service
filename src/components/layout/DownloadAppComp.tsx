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
              <ViewMoreText>볼거리가 다양해졌어요</ViewMoreText>
              <DownloadAppText>앱을 다운 받아 보세요!</DownloadAppText>
            </AppQRCodeTextDiv>
          </AppQRCodeDiv>
        </DownloadAppCompDiv>
      )}
    </>
  );
};

export default DownloadAppComp;
