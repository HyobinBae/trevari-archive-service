import React from 'react';
import styled from '@emotion/styled';
import CreatedAtText from './CreatedAtText';
import Kebab from '../../../../components/svgs/Kebab';



const ProfileBox = () => {
  const white = '#FFFFFF';
  return(
    <Container>
      <CreatedAtText/>
      <Kebab fill={white}/>
    </Container>
  )
}

export default ProfileBox

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
