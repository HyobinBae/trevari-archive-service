import React from 'react';
import styled from '@emotion/styled';
import NavigationButton from './NavigationButton'
import ContentDivider from './ContentDivider';

const NavigationBar = () => {
  return(
    <>
      <NavContainer>
        <NavigationButton/>
      </NavContainer>
      <ContentDivider/>
    </>
  )
}
export default NavigationBar;

const NavContainer= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 20px 0px 0px;

  width: 100%;
  height: 56px;
  
  background: #222222;
`