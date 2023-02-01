import React from 'react';
import styled from '@emotion/styled';
import { heading11 } from '@trevari/typo';

const message = '확인';
const AgreeButton = () => {
  return(
    <ButtonBox>
      <ButtonText>
        {message}
      </ButtonText>
    </ButtonBox>
  )
}

export default AgreeButton

const ButtonBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px;

  width: 135px;
  height: 44px;
  
  background: #FF7900;
  border-radius: 2px;
  border-style: none;
  
  z-index: 10;
`
const ButtonText = styled.div`
  width: 100%;

  ${heading11};

  color: #FFFFFF;
`