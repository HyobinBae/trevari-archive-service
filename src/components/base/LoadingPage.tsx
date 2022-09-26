import React from 'react';
import styled from '@emotion/styled';
import Lottie from 'lottie-react';
import TREVARI_LOADING from 'components/svgs/trevari-loading.json';

const LoadingPage = () => {
  return <LottieWrap animationData={TREVARI_LOADING} loop={true} />;
};

export default LoadingPage;

const LottieWrap = styled(Lottie)`
  position: absolute;
  z-index: 1000;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: white;
`;
