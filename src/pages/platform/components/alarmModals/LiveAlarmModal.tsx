import React, { useRef, useEffect, EventHandler } from 'react';
import styled from '@emotion/styled';
import {heading9} from '@trevari/typo';
import LinkToButton from './LinkToButton';
import DimBackground from '../editModals/DimBackground';
import { useAppDispatch, useAppSelector } from '../../../../services/store';
import { selectLiveLink, selectPlatform } from '../../services/platform.store';
import { getLiveLink } from '../../../../api/backend';
import { useParams } from 'react-router-dom';


const LiveAlarmModal = () => {
  const { platformID } = useParams()
  const dispatch = useAppDispatch()
  const platformTitle = useAppSelector(selectPlatform)
  const clubTitle = platformTitle.club_title
  const liveLink = useAppSelector((selectLiveLink))
  const linkURL = liveLink.link

  const message = 'Live 보러가기'

  useEffect(() => {
    dispatch(getLiveLink.initiate({platformID}))
  },[])

  return(
    <>
      <DimBackground/>
      <Modal>
        <TextBox>
          <MessageText>5분 후에</MessageText>
          <TitleText>{clubTitle}</TitleText>
          <MessageText>라이브가 시작됩니다.</MessageText>
        </TextBox>
        <LinkToButton message={message} linkURL={linkURL} />
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
  z-index: 300;
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
