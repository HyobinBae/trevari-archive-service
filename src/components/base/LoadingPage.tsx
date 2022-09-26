import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import TREVARI_LOADING from 'components/svgs/trevari-loading.json';

const LoadingPage = () => {
  const loadingDom = document.getElementById('loading');

  useEffect(() => {
    lottie.loadAnimation({
      container: loadingDom,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: TREVARI_LOADING,
    });
  }, []);

  return <LottieWrap id="loading" />;
};

export default LoadingPage;

const LottieWrap = styled.div`
  position: absolute;
  z-index: 1000;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: white;
`;
