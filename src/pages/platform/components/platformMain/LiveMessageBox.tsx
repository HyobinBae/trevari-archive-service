import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import LiveButton from './LiveButton';
import {body8} from '@trevari/typo';
import Calender from '../../../../components/svgs/Calender';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../services/store';
import { selectLiveDate } from '../../services/platform.store';
import { getLiveDate } from '../../../../api/backend';


const LiveMessageBox = () => {
  const { platformID } = useParams();
  const liveDate = useAppSelector(selectLiveDate)
  const dispatch = useAppDispatch()

  const date = new Date(liveDate?.date)

  const liveMonth = date.getMonth()+1
  const liveDay = date.getDate()
  const liveHour = date.getTime()
  // 실제 nowHour
  // const nowHour = Date.now()

  //데모용 nowHour
  const now = new Date(2023,1,2, 21,0,0)
  const nowHour = now.getTime()


  const isLiveButtonAlert = () => {
    const leftHour = (liveHour - nowHour)/ ( 60 * 60 * 1000 )
    return leftHour <= 1
  }

  const fetchLiveDate = () => {
    dispatch(getLiveDate.initiate({platformID}))
  }

  setInterval(fetchLiveDate, 10000)
  setInterval(isLiveButtonAlert, 10000)

  useEffect(()=>{
    dispatch(getLiveDate.initiate({platformID}))
  },[])

  return(
    <BackGround>
      {!isLiveButtonAlert()?
      <>
        <Calender/>
        <MessageBox>
          <Message>지금은 LIVE 준비중입니다.</Message>
          <DateMessage>다음 세션은 {liveMonth}월 {liveDay}일 예정입니다.</DateMessage>
        </MessageBox>
      </>
      :
      <LiveButton/>
      }
    </BackGround>
  )
}

export default LiveMessageBox

const BackGround = styled.div`
  width: 100%;
  height: 250px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #2C2C2A;
`
const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  color:#CACAC8;
  ${body8}
`
const Message = styled.div`
`
const DateMessage = styled.div``