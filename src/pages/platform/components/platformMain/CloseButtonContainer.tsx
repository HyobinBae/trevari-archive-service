import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import PlatformCloseButton from '../../../../components/svgs/PlatformCloseButton';



const CloseButtonContainer = () => {
  const navigate = useNavigate();
  const closeButtonHandler:(e:React.MouseEvent<HTMLButtonElement>) => void = () => {
    console.log('event')
    navigate('/main')
  };

  return(
    <ButtonContainer>
      <ButtonBox onClick={closeButtonHandler}>
        <PlatformCloseButton />
      </ButtonBox>
    </ButtonContainer>
  )
}

export default CloseButtonContainer

const ButtonContainer = styled.button`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  
  padding: 20px 20px 12px;
  background: #222222;
  
  border:none;
`
const ButtonBox = styled.div`
  cursor: pointer;
  
  border: none;
  background: #222222;
`

