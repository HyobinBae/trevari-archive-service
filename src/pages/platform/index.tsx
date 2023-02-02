import React from "react";
import PlatformHeader from './components/platformMain/PlatformHeader';
import VodPlayerArea from './components/platformMain/VodPlayerArea';
import ContentsArea from './components/platformMain/ContentsArea';
import LiveAlarmModal from './components/alarmModals/LiveAlarmModal';
import { useAppDispatch, useAppSelector } from '../../services/store';
import { selectLiveDate, setIsLiveModal } from './services/platform.store';


interface Props {
  onClick: React.MouseEventHandler<HTMLDivElement>
}


const Platform = () => {
  const dispatch = useAppDispatch()
  const liveDate = useAppSelector((selectLiveDate))
  const isLiveModal = useAppSelector(state => state.platform.isLiveModal)

  const date = new Date(liveDate?.date)
  const liveHour = date.getTime()
  const nowHour = Date.now()

  //Error status 401(unAuthorized) => 'https://login.trevari.co.kr'
  //Error status 403(Forbidden) => SubscribeAlarmModal

  const isLiveModalToggle = () => {
    const leftMinute = (liveHour-nowHour)/(60 * 1000)
    if (leftMinute <= 5) {
      dispatch(setIsLiveModal(true))
    }}

  setInterval(isLiveModalToggle, 10000)


  return(
    <>
      {isLiveModal===true && <LiveAlarmModal/>}
      {/*{<SubscribeAlarmModal/>}*/}
      {/*<LiveAlarmModal/>*/}
      <PlatformHeader/>
      <VodPlayerArea/>
      <ContentsArea/>
    </>
  )
}

export default Platform
