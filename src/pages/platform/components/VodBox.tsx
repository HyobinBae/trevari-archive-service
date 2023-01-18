import React from 'react';
import styled from '@emotion/styled';
import LiveButton from './LiveButton';

const VodBox = () => {
  return(
    <Box>
      <LiveButton/>
    </Box>
  )
}
export default VodBox

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 250px;

  background: #2C2C2A;
`