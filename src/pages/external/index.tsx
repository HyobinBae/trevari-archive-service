import React from 'react';
import Box from 'components/base/Box';
import styled from '@emotion/styled';

interface IProps {
  url?: string;
}

const External = ({
  url = 'https://docs.google.com/forms/d/e/1FAIpQLSfv9vUQrT_AAQvHfQYrJrTMdZbE9tEvUd4xCcfcBmMUBY2_pQ/viewform?usp=pp_url',
}: IProps) => {
  return (
    <Box style={{ width: '100%', height: '100vh', background: 'white' }}>
      <IframeWrap>
        <Iframe src={url}></Iframe>
      </IframeWrap>
    </Box>
  );
};

export default External;

export const IframeWrap = styled.div`
  padding-top: 48px;
`;
export const Iframe = styled.iframe`
  width: 100%;
  height: calc(100vh - 48px);
  border: none;
`;
