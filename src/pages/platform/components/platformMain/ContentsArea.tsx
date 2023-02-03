import React from 'react';
import styled from '@emotion/styled';

import VodContainer from '../archiveTab/VodContainer';
import MagazineContainer from '../archiveTab/MagazineContainer';
import NavigationBar from './NavigationBar';
import { useAppSelector } from '../../../../services/store';
import { useWindowSize } from '../../../../utils/windowResize';
import ComingSoon from '../communityTab/ComingSoon';

const ContentsArea = () => {
  const title = useAppSelector((state)=> state.platform.getNavTitle)
  const { height }= useWindowSize();

  const heightSize = {height: height-380}

  return(
    <BackGround style={heightSize}>
      <NavigationBar/>
      { title === "다시보기" && <VodContainer/> }
      { title === "읽을거리" && <MagazineContainer/> }
      { title === "커뮤니티" && <ComingSoon/> }
    </BackGround>
  )
}

export default ContentsArea

const BackGround = styled.div`
  background: #222222;
`