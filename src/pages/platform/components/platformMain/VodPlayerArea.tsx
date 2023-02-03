import React from 'react';
import VodPlayerBox from './VodPlayerBox';
import styled from '@emotion/styled';
import LiveMessageBox from './LiveMessageBox';
import { useAppSelector } from '../../../../services/store';

const VodPlayerArea = () => {
  const title = useAppSelector((state)=> state.platform.getNavTitle)
  const vodSrc = useAppSelector((state)=> state.platform.getVodSrc)

  return(
    <Container>
      {(title==='커뮤니티') && !vodSrc?
        <LiveMessageBox/>
        :
        <VodPlayerBox/>
      }
    </Container>
  )
}
export default VodPlayerArea

const Container = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  

`