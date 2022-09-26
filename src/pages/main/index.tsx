import React from 'react';

import HeroSlider from 'pages/main/components/HeroSlider';
import CurationList from 'pages/main/components/CurationList';
import Posts from 'pages/main/components/Posts';
import FooterComp from 'components/layout/Footer';

function Main() {
  return (
    <>
      <HeroSlider />
      <CurationList />
      <Posts />
      <FooterComp />
    </>
  );
}

export default Main;
