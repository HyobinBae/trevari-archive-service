import React from 'react';
import styled from '@emotion/styled';
import {heading12} from '@trevari/typo';

const NavigationButton = () => {
  return(
    <>
    {NAVIGATION_TITLE.map(({id, title})=>(
      <ButtonBox key={id}>
        <ButtonText>{title}</ButtonText>
        <SelectedBar/>
      </ButtonBox>)
  )}
    </>
  )
}

export default NavigationButton;

const ButtonBox = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 125px;
  height: 32px;

  background: #222222;
  border-style: none;
`

const ButtonText = styled.span`
  width: 51px;
  height: 20px;

 ${heading12};

  color: #ADADAA;
`

const SelectedBar = styled.div`
  width: 125px;
  height: 4px;
  
  background: #000000;
  /* when selected
  background: #FF7900;
   */
  
  opacity: 0;
  
  flex: none;
`

const NAVIGATION_TITLE = [
  {id: 1, title: '커뮤니티'},
  {id: 2, title: '다시보기'},
  {id: 3, title: '읽을거리'}
]
