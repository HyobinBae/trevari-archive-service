import React from 'react';
import styled from '@emotion/styled';
import {heading9} from '@trevari/typo';
import {body5} from '@trevari/typo';
import LinkToButton from './LinkToButton';
import DimBackground from './DimBackground';

const SubscribeAlarmModal = () => {
  return(
    <>
    <DimBackground/>
    <Modal>
      <TextBox>
        <MessageText>클럽장 구독 클럽 멤버에게만</MessageText>
        <MessageText>공개되는 페이지입니다.</MessageText>
      </TextBox>
      <TextBox>
        <LinkText>클럽장 구독 클럽 멤버가 되고 싶다면?</LinkText>
      </TextBox>
      <LinkToButton/>
    </Modal>
    </>
  )
}

export default SubscribeAlarmModal

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
  height: 219px;
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

const LinkText = styled.div`
  ${body5};

  color: #000000;
`
