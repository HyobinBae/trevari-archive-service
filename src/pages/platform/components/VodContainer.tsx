import React from 'react';
import VodBox from './VodBox';
import styled from '@emotion/styled';

const VodContainer = () => {
  return(
    <Container>
      <VodBox/>
    </Container>
  )
}
export default VodContainer

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  

`