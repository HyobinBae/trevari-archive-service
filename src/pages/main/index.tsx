import React, { useEffect, useState } from 'react';
import ReactFbq from 'react-fbq';

import HeroSlider from 'pages/main/components/HeroSlider';
import Posts from 'pages/main/components/Posts';
import FooterComp from 'components/layout/Footer';
import {store, useAppDispatch, useAppSelector} from 'services/store';
import {selectUserId, validateAuth} from 'services/auth/auth.store';
import { pageView } from 'services/analytics/analytics.store';
import AppDownloadPopup from 'pages/main/components/AppDownloadPopup';
import { useMobileDetect } from 'hooks/useDetectMobile';
import NewCurationList from 'pages/main/components/NewCurationList';
import {getToken} from "../../utils/auth";
import {myApm} from "../../index";

function Main() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const mobileDetect = useMobileDetect();
  const today = new Date();
  const todayDateToString = today.getDate().toString();
  const savedTodayDate = localStorage.getItem('today');
  const userId = useAppSelector(selectUserId);
  const dispatch = useAppDispatch();

  if(validateAuth(getToken())){
    myApm.setUserContext(store.getState().user.user.id)
  }

  useEffect(() => {
    if (todayDateToString !== savedTodayDate) {
      setIsOpenPopup(true);
    } else {
      setIsOpenPopup(false);
    }
    dispatch(pageView(userId));
    ReactFbq.pageView();
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
      <NewCurationList />
      <Posts />
      <FooterComp />
      {mobileDetect.isMobile() && !mobileDetect.isApp() && isOpenPopup && (
        <AppDownloadPopup onClosePopup={onClosePopup} />
      )}
    </>
  );
}

export default Main;
