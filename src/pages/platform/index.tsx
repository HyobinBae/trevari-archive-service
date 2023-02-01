import React from "react";
import PlatformHeader from './components/platformMain/PlatformHeader';
import VodPlayerArea from './components/platformMain/VodPlayerArea';
import ContentsArea from './components/platformMain/ContentsArea';


const Platform = () => {
  return(
    <>
      <PlatformHeader/>
      <VodPlayerArea/>
      <ContentsArea/>
    </>
  )
}

export default Platform
