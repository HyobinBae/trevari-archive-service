import styled from '@emotion/styled';
import React from 'react';

const Legacy = () => {
  return <IframeWindow src="https://trevari.co.kr/apply" allowFullScreen={true}></IframeWindow>;
};

export default Legacy;

export const IframeWindow = styled.iframe`
  display: block;
  width: 568px;
  height: 500px;
  border: none;
`;
