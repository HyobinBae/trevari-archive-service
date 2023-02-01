import React from "react";
import PlatformHeader from './components/platformMain/PlatformHeader';
import VodPlayerArea from './components/platformMain/VodPlayerArea';
import ContentsArea from './components/platformMain/ContentsArea';
import LiveAlarmModal from './components/alarmModals/LiveAlarmModal';
import { useAppSelector } from '../../services/store';
import { selectLiveDate } from './services/platform.store';


const Platform = () => {
  const liveDate = useAppSelector((selectLiveDate))

  const date = new Date(liveDate?.date)
  const liveHour = date.getTime()
  const nowHour = Date.now()

  const isLiveModalToggle = () => {
    const leftMinute = (liveHour-nowHour)/(60 * 1000)
    return leftMinute <= 5
  }


  return(
    <>
      {isLiveModalToggle() && <LiveAlarmModal/>}
      <PlatformHeader/>
      <VodPlayerArea/>
      <ContentsArea/>
    </>
  )
}

export default Platform
