import React from 'react';
import styled from '@emotion/styled';
import NameText from './NameText';
import CircleImage from './CircleImage';


const ProfileBox = () => {
  return(
    <Container>
      <CircleImage/>
      <NameText/>
    </Container>
  )
}

export default ProfileBox

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
