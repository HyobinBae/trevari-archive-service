import React from 'react';
import styled from '@emotion/styled';
import { heading12 } from '@trevari/typo';
const message = '등록';
const EditorSubmitButton = () => {
  return(
    <ButtonContainer>
      <ButtonBox>
        <ButtonText>
          {message}
        </ButtonText>
      </ButtonBox>
    </ButtonContainer>
  )
}

export default EditorSubmitButton

const ButtonContainer = styled.div`
  margin-top: 11px;
  
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`

const ButtonBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 14px;

  width: 53px;
  height: 36px;
  
  background: #FF7900;
  border-radius: 2px;
  border-style: none;
  
  z-index: 10;
`
const ButtonText = styled.div`
  width: 100%;

  ${heading12};

  color: #FFFFFF;
`