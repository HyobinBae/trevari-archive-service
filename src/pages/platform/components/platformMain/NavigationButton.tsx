import React from 'react';
import styled from '@emotion/styled';
import {heading12} from '@trevari/typo';
import { ButtonProps, Styles } from './NavigationBar';
import { useAppDispatch } from '../../../../services/store';
import { setNavTitle, setSearchParams } from '../../services/platform.store';

const NavigationButton = (({navTitle,sort}:ButtonProps, style:Styles, onClick:()=>void) => {
  const dispatch = useAppDispatch()
  const params = new URLSearchParams()

  const navButtonHandler = () => {
    dispatch(setNavTitle(navTitle))
  }
  const getSearchParams = () => {
    params.set('name', sort)
    dispatch(setSearchParams(params.toString()))
  }

  return(
    <>
      <ButtonBox
        onClick={() =>{
        getSearchParams();
        navButtonHandler();
      }}>
        <ButtonText style={style.button}>{navTitle}</ButtonText>
        <SelectedBar style={style.bar}/>
      </ButtonBox>
    </>
  )
})

export default NavigationButton;

const ButtonBox = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: calc(100%/3);
  height: 36px;

  background: #222222;
  border-style: none;

  padding:0;

  cursor: pointer;
`

const ButtonText = styled.span`
  width: 51px;

 ${heading12};
  
  color: #ADADAA;
`

const SelectedBar = styled.div`
  width: 100%;
  height: 4px;
  
  background: #222222;
  
  flex: none;
`
