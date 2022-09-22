import React from 'react';
import {
  AppQRCodeDiv, AppQRCodeTextDiv,
  DownloadAppCompDiv,
  DownloadAppText,
  GoToBookreviewText,
  ViewMoreText,
} from '../styles/main.style';
import { RightChevronIcon } from '@trevari/icons';
import { Button } from '@trevari/components';
import AppIntroduce from 'components/svgs/AppIntroduce';
import AppQRCode from 'components/svgs/AppQRCode';
import { useTheme } from '@emotion/react';
import { useWindowSize } from '../../../hooks/useWindowSize';

const DownloadAppComp = () => {
  const { width } = useWindowSize();
  const { colors: { orange900 } } = useTheme();

  const goToWriteBookreview = () => {
    console.log('goToWriteBookreview');
  }

  return (
    <DownloadAppCompDiv width={width}>
      <AppIntroduce />
      <AppQRCodeDiv>
        <AppQRCode />
        <AppQRCodeTextDiv>
          <ViewMoreText>볼거리가 다양해졌어요</ViewMoreText>
          <DownloadAppText>앱을 다운 받아 보세요!</DownloadAppText>
        </AppQRCodeTextDiv>
      </AppQRCodeDiv>
      {/*<Button*/}
      {/*  onClick={goToWriteBookreview}*/}
      {/*  variant={'outline'}*/}
      {/*  style={{width: '268px'}}*/}
      {/*  rightIcon={ <RightChevronIcon width={24} height={24} color={orange900} />}*/}
      {/*>*/}
      {/*  <GoToBookreviewText>*/}
      {/*  독후감 작성하러 가기*/}
      {/*  </GoToBookreviewText>*/}
      {/*</Button>*/}
    </DownloadAppCompDiv>
  )
}

export default DownloadAppComp;
