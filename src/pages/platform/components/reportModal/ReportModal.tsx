import React from 'react';
import ReportButton from './ReportButton';
import {BottomSheet} from 'react-spring-bottom-sheet';
import styled from '@emotion/styled';

const ReportModal = () => {
  return (
    <>
      <BottomSheet
        open={true}
        scrollLocking={true}
      >
        <ButtonContainer style={{background: 'black'}}>
          <ReportButton/>
        </ButtonContainer>
      </BottomSheet>
    </>
  )
}

export default ReportModal

const ButtonContainer = styled.div`
  position: absolute;
  top: 100vh;
  left: 50%;
  transform: translate(-50%, 0%);
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  max-width: 500px;
  width: 100vw;
  height: 60px;
  
  padding: 12px 0;
  
  background: #222222;
  border-radius: 8px 8px 0 0;
`

