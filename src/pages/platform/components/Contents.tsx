import React from 'react';
import styled from '@emotion/styled';
import Content from './Content';

const Contents = () => {
  return(
   <Container>
     <Content/>
     <Content/>
   </Container>
  )
}

export default Contents

const Container = styled.li`
  
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  gap: 5px;
  
  list-style: none;
  padding: 0;
  
  background: #222222;
`

