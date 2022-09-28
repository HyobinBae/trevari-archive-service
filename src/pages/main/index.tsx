import React, { useEffect } from 'react';

import HeroSlider from 'pages/main/components/HeroSlider';
import CurationList from 'pages/main/components/CurationList';
import Posts from 'pages/main/components/Posts';
import FooterComp from 'components/layout/Footer';
import MainHelmet from './components/MainHelmet';
import { useAppDispatch, useAppSelector } from 'services/store';
import { selectUserId } from 'services/auth/auth.store';
import { pageView } from 'services/analytics/analytics.store';

function Main() {
  const userId = useAppSelector(selectUserId);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(pageView(userId));
  });
  return (
    <>
      <MainHelmet />
      <HeroSlider />
      <CurationList />
      <Posts />
      <FooterComp />
    </>
  );
}

export default Main;
