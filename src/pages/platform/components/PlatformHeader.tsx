import React from 'react';
import styled from '@emotion/styled';
import Title from './Title';
import SubTitle from './SubTitle';
import CloseButtonContainer from './CloseButtonContainer';

const PlatformHeader = () => {
  return(
    <Header>
      <CloseButtonContainer/>
      <Title/>
      <SubTitle/>
    </Header>
  )
}

export default PlatformHeader

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  padding-bottom: 20px;
  background: #222222;
`
