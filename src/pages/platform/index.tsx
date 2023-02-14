import React, { useEffect } from 'react';
import PlatformHeader from './components/platformMain/PlatformHeader';
import VodPlayerArea from './components/platformMain/VodPlayerArea';
import ContentsArea from './components/platformMain/ContentsArea';
import LiveAlarmModal from './components/alarmModals/LiveAlarmModal';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { selectLiveDate, setIsLiveModal } from './services/platform.store';
import SubscribeAlarmModal from './components/alarmModals/SubscribeAlarmModal';
import { getLiveDate } from '../../api/backend';
import { useParams } from 'react-router-dom';


interface Props {
  onClick: React.MouseEventHandler<HTMLDivElement>
}


const Platform = () => {
  const { platformID } = useParams();
  const dispatch = useAppDispatch()
  const liveDate = useAppSelector(selectLiveDate)
  const isLiveModal = useAppSelector(state => state.platform.isLiveModal)

  const date = new Date(liveDate?.date)
  const liveHour = date.getTime()
  // 실제 nowHour
  // const nowHour = Date.now()

  //데모용 nowHour
  const now = new Date(2023,1,2, 21,40,0)
  const nowHour = now.getTime()

  //Error status 401(unAuthorized) => 'https://login.trevari.co.kr'
  //Error status 403(Forbidden) => SubscribeAlarmModal

  const fetchLiveDate = () => {
    dispatch(getLiveDate.initiate({platformID}))
  }

  const isLiveModalToggle = () => {
    const leftMinute = (liveHour-nowHour)/(60 * 1000)

    if (leftMinute <= 5 && leftMinute > 0) {
      dispatch(setIsLiveModal(true))
    }else return false
  }

  setInterval(fetchLiveDate, 10000)
  setInterval(isLiveModalToggle, 10000)

  useEffect(()=> {
    fetchLiveDate()
    isLiveModalToggle()
  })

  return(
    <>
      {isLiveModal===true && <LiveAlarmModal/>}
      {/*<SubscribeAlarmModal/>*/}
      <PlatformHeader/>
      <VodPlayerArea/>
      <ContentsArea/>
    </>
  )
}

export default Platform
