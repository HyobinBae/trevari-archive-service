import React from 'react';
import styled from '@emotion/styled';
import { heading11 } from '@trevari/typo';

const message = 'LIVE 보러가기';
const LinkToButton = () => {
  return(
    <ButtonBox>
      <ButtonText>
        {message}
      </ButtonText>
    </ButtonBox>
  )
}

export default LinkToButton

const ButtonBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px;

  width: 100%;
  height: 44px;
  
  background: #FF7900;
  border-radius: 2px;
  border-style: none;
  
  z-index: 10;
`
const ButtonText = styled.h1`
  width: 89px;
  height: 26px;

  ${heading11};

  color: #FFFFFF;
`