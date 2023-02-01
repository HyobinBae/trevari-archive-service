import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import {heading12} from '@trevari/typo';
import {useAppDispatch} from '../../../../services/store';
import { setNavTitle, setSearchParams } from '../../services/platform.store';
import ContentDivider from '../archiveTab/ContentDivider';

export interface ButtonProps {
  id: number;
  navTitle: string;
  sort: string;
}

export interface Styles{
  button: { color: string }
  bar: { background: string};
}

const InitialButtonStyle = {button: {color:'#ADADAA'}, bar: {background:'#222222'}}
const SelectedButtonStyle = {button: {color:'#FF7900'}, bar: {background: '#FF7900'}}

const NavigationBar = () => {
  const [selectedButtonID,setSelectedButtonID] = useState(2)

  const dispatch = useAppDispatch()
  const params = new URLSearchParams()

  const getSearchParams = (sort:string) => {
    params.set('name', sort)
    dispatch(setSearchParams(params.toString()))
  }
  const getNavTitle = (navTitle:string) =>{
    dispatch(setNavTitle(navTitle))
  }

  const getButtonID = (id:number) =>{
    setSelectedButtonID(id)
  }


  return(
    <>
      <NavContainer>
        {NAVIGATION_TITLE.map((title ) =>
          {return(
            <ButtonBox
              key={title.id}
              onClick={() =>{
                getNavTitle(title.navTitle);
                getSearchParams(title.sort);
                getButtonID(title.id);
              }}>
              {
                selectedButtonID === title.id?
                  <>
                    <ButtonText style={SelectedButtonStyle.button}>{title.navTitle}</ButtonText>
                    <SelectedBar style={SelectedButtonStyle.bar}/>
                  </>
                :
                  <>
                    <ButtonText style={InitialButtonStyle.button}>{title.navTitle}</ButtonText>
                    <SelectedBar style={InitialButtonStyle.bar}/>
                  </>
              }

            </ButtonBox>
          )}
        )}
      </NavContainer>
      <ContentDivider/>
    </>
  )
}
export default NavigationBar;

const NavContainer= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  padding: 20px 0 0;

  width: 100%;
  height: 56px;
  
  background: #222222;

  cursor: pointer;
`

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

const NAVIGATION_TITLE = [
  {id: 1, navTitle: '커뮤니티', sort: 'community'},
  {id: 2, navTitle: '다시보기', sort: 'replay'},
  {id: 3, navTitle: '읽을거리', sort: 'magazine'}
];
