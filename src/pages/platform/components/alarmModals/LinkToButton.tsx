import React from 'react';
import styled from '@emotion/styled';
import { heading11 } from '@trevari/typo';
import { useAppDispatch } from '../../../../services/store';
import { setIsLiveModal } from '../../services/platform.store';

interface Props {
  message: string
  linkURL: string
}

const LinkToButton = ({message,linkURL}:Props) => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(setIsLiveModal(false))
  }

  return(
    <ButtonBox href={linkURL} onClick={handleClick}>
      <ButtonText>
        {message}
      </ButtonText>
    </ButtonBox>
  )
}

export default LinkToButton

const ButtonBox = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px;

  width: 100%;
  height: 44px;
  
  background: #FF7900;
  border-radius: 2px;
  border-style: none;
  
  z-index: 10;

  cursor: pointer;
`
const ButtonText = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 26px;

  ${heading11};

  color: #FFFFFF;
`