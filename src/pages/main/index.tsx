import React, { useEffect, useState } from 'react';

import HeroSlider from 'pages/main/components/HeroSlider';
import CurationList from 'pages/main/components/CurationList';
import Posts from 'pages/main/components/Posts';
import FooterComp from 'components/layout/Footer';
import AppDownloadPopup from './components/AppDownloadPopup';
import { useMobileDetect } from '../../hooks/useDetectMobile';

function Main() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const mobileDetect  = useMobileDetect();
  const today = new Date();
  const todayDateToString = today.getDate().toString();
  const savedTodayDate = localStorage.getItem('today');

  useEffect(() => {
    if (todayDateToString !== savedTodayDate) {
      setIsOpenPopup(true);
    } else {
      setIsOpenPopup(false);
    }
  }, []);

  const onClosePopup = (noMoreShowPopupToday: boolean) => {
    setIsOpenPopup(false);
    if (noMoreShowPopupToday) {
      localStorage.setItem('today', todayDateToString.toString());
    }
  };

  return (
    <>
      <HeroSlider />
      <CurationList />
      <Posts />
      <FooterComp />
      {mobileDetect.isMobile() &&
      !mobileDetect.isApp() &&
      isOpenPopup &&
      <AppDownloadPopup onClosePopup={onClosePopup} />}
    </>
  );
}

export default Main;
