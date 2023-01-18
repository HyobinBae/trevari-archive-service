import React from "react";
import NavigationBar from './components/NavigationBar'
import PlatformHeader from './components/PlatformHeader';
import VodContainer from './components/VodContainer';
import CommunityContainer from './components/CommunityContainer';
import ArchiveList from './components/ArchiveList';

const Platform = () => {
  return(
    <>
      <PlatformHeader/>
      <VodContainer/>
      <NavigationBar/>
      <CommunityContainer/>
      <ArchiveList/>
    </>
  )
}

export default Platform
