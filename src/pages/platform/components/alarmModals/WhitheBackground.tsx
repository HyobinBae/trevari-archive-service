import React from 'react';
import styled from '@emotion/styled';


const WhiteBackground = () => {
  return(
    <>
      <Background/>
    </>
  )
}

export default WhiteBackground

const Background = styled.div`
  position: fixed;

  max-width: 500px;
  width: 100vw;
  height: 100vh;

  background: #FFFFFF;
  opacity: 1;
`
