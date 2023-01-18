import React from 'react';
import styled from '@emotion/styled';
import {body4} from '@trevari/typo';

const ReportButton = () => {
  return (
    <ButtonContainer>
      <ButtonBox>
        <Text>신고하기</Text>
      </ButtonBox>
    </ButtonContainer>
  )
}

export default ReportButton

const ButtonContainer = styled.div`
  position: absolute;
  top: 100vh;
  left: 50%;
  transform: translate(-50%, -100%);
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 60px;
  
  padding: 12px 0;
  
  background: #222222;
  border-radius: 8px 8px 0px 0px;
`
const ButtonBox = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  width: 100%;
  height: 36px;
  
  padding: 6px 20px;
  
  border: none;

  background: #222222;
  
  :hover{
    background: #2C2C2A;
  }
`
const Text = styled.div`
  ${body4};
  
  color: #FFFFFF;
`