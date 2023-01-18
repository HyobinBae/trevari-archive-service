import React from 'react';
import styled from '@emotion/styled';


const DimBackground = () => {
  return(
    <>
      <Background/>
    </>
  )
}

export default DimBackground

const Background = styled.div`
  position: fixed;

  max-width: 500px;
  width: 100vw;
  height: 100vh;

  background: #000000;
  opacity: 0.4;
`
