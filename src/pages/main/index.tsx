import React, { useEffect, useState } from 'react';

import HeroSlider from 'pages/main/components/HeroSlider';
import CurationList from 'pages/main/components/CurationList';
import Posts from 'pages/main/components/Posts';
import FooterComp from 'components/layout/Footer';
import AppDownloadPopup from './components/AppDownloadPopup';
import moment from 'moment';

function Main() {
  const [isOpenPopup, setIsOpenPopup] = useState(true);

  useEffect(() => {
    // console.log('231');
    const currentDate = new Date();
    const moment1 = moment().startOf('day');
    console.log('111111', moment1);
    console.log('currentDate', currentDate);
    // if (currentDate < )
    const start = new Date();

    const utcHours = start.setUTCHours(0,0,0,0);

    const end = new Date();
    const utcHours1 = end.setUTCHours(15,18,59,999);

    if (currentDate.getUTCHours() > utcHours && currentDate.getUTCHours() < utcHours1) {
      console.log('이얍...');

    }
    // alert( start.toUTCString() + ':' + end.toUTCString() );

    const isFinishedSelectingDownloadPopup = window.localStorage.getItem('isFinishedSelectingDownloadPopup');
    console.log('isFinishedSelectingDownloadPopup', isFinishedSelectingDownloadPopup);
    if (isFinishedSelectingDownloadPopup) {
      setIsOpenPopup(false);
    }
  }, [isOpenPopup]);

  const onClosePopup = () => {
    setIsOpenPopup(false);
    window.localStorage.setItem('isFinishedSelectingDownloadPopup', 'true');
  };

  return (
    <>
      <HeroSlider />
      <CurationList />
      <Posts />
      <FooterComp />
      {isOpenPopup && <AppDownloadPopup onClosePopup={onClosePopup} />}
    </>
  );
}

export default Main;
