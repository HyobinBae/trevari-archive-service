import React from 'react';
import ContentDivider from './ContentDivider';
import styled from '@emotion/styled';

import Contents from './Contents';
import Content from './Content';


const ArchiveContentContainer = () => {
  return(
    <>
      <Container>
        <Content/>
      </Container>
      <ContentDivider/>
      <Container>
        <Contents/>
      </Container>
      <ContentDivider/>
    </>
  )
}

export default ArchiveContentContainer

const Container = styled.li`
  width: 100%;
  
  display: flex;
  justify-content: flex-start;
  
  list-style: none;
  padding: 24px 30px 24px 24px;
  
  background: #222222;
`