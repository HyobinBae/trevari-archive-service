import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { heading12 } from '@trevari/typo';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../services/store';
import { getLiveLink } from '../../../../api/backend';

const LiveButton = () => {
  const { platformID } = useParams()
  const liveLink = useAppSelector((selectLiveLink))
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getLiveLink.initiate({platformID}))
  },[])

  return(
    <ButtonBox>
      <ButtonText href={liveLink.link}>
        Live 시작하기
      </ButtonText>
    </ButtonBox>
  )
}

export default LiveButton

const ButtonBox = styled.a`
  position: fixed;
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