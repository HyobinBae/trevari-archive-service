import React, { useEffect, useState } from 'react';

import HeroSlider from 'pages/main/components/HeroSlider';
import CurationList from 'pages/main/components/CurationList';
import Posts from 'pages/main/components/Posts';
import FooterComp from 'components/layout/Footer';
import { useAppDispatch, useAppSelector } from 'services/store';
import { selectUserId } from 'services/auth/auth.store';
import { pageView } from 'services/analytics/analytics.store';
import AppDownloadPopup from 'pages/main/components/AppDownloadPopup';
import { useMobileDetect } from 'hooks/useDetectMobile';

function Main() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const mobileDetect = useMobileDetect();
  const today = new Date();
  const todayDateToString = today.getDate().toString();
  const savedTodayDate = localStorage.getItem('today');
  const userId = useAppSelector(selectUserId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (todayDateToString !== savedTodayDate) {
      setIsOpenPopup(true);
    } else {
      setIsOpenPopup(false);
    }
    dispatch(pageView(userId));
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
      {mobileDetect.isMobile() && !mobileDetect.isApp() && isOpenPopup && (
        <AppDownloadPopup onClosePopup={onClosePopup} />
      )}
    </>
  );
}

export default Main;
