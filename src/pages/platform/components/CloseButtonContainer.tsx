import React from 'react';
import styled from '@emotion/styled';
import PlatformCloseButton from '../../../components/svgs/PlatformCloseButton';

const CloseButtonContainer = () => {
  return(
    <ButtonContainer>
      <PlatformCloseButton/>
    </ButtonContainer>
  )
}

export default CloseButtonContainer

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  
  padding: 56px 20px 12px;
  background: #222222;
`

