import React from 'react';
import styled from '@emotion/styled';
import { heading11 } from '@trevari/typo';

const message = '취소';
const CancelButton = () => {
  return(
    <ButtonBox>
      <ButtonText>
        {message}
      </ButtonText>
    </ButtonBox>
  )
}

export default CancelButton

const ButtonBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px;

  width: 135px;
  height: 44px;
  
  background: #4E4E4C;
  border-radius: 2px;
  border-style: none;
  
  z-index: 10;
`
const ButtonText = styled.div`
  width: 100%;

  ${heading11};

  color: #FFFFFF;
`