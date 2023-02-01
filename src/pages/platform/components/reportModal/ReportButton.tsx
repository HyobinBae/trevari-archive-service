import React from 'react';
import styled from '@emotion/styled';
import {body4} from '@trevari/typo';

const report = '신고하기';
const ReportButton = () => {
  return (
      <ButtonBox>
        <Text>{report}</Text>
      </ButtonBox>
  )
}

export default ReportButton

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