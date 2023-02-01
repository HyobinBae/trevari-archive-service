import React from 'react';
import styled from '@emotion/styled';
import {heading9} from '@trevari/typo';
import LinkToButton from './LinkToButton';
import DimBackground from '../editModals/DimBackground';

const clubTitle = '내궁의 F&B 기획과 트렌드 읽기'

const LiveAlarmModal = () => {
  return(
    <>
    <DimBackground/>
    <Modal>
      <TextBox>
        <MessageText>5분 후에</MessageText>
        <TitleText>{clubTitle}</TitleText>
        <MessageText>라이브가 시작됩니다.</MessageText>
      </TextBox>
      <LinkToButton/>
    </Modal>
    </>
  )
}

export default LiveAlarmModal

const Modal = styled.div`
  position: absolute;
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -50%);
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 70%;
  height: 200px;
  padding: 24px;

  border-radius: 6px;
  
  background: #FFFFFF;
`

const TextBox = styled.div`
  width: 100%;
  margin-bottom: 24px;
`

const MessageText = styled.div`
  ${heading9};
  
  color: #000000;
`

const TitleText = styled.div`
  ${heading9};
  
  color: #FF7900;
`
