import React from 'react';
import styled from '@emotion/styled';
import { heading12 } from '@trevari/typo';

const LiveButton = () => {
  return(
    <ButtonBox>
      <ButtonText>
        Live 시작하기
      </ButtonText>
    </ButtonBox>
  )
}

export default LiveButton

const ButtonBox = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 14px;

  width: 107px;
  height: 36px;
  
  background: #FF7900;
  border-radius: 2px;
  border-style: none;
`
const ButtonText = styled.h1`
  width: 79px;
  height: 24px;

  ${heading12};

  color: #FFFFFF;
`