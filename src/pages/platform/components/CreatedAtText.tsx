import React from 'react';
import styled from '@emotion/styled';
import {body8} from '@trevari/typo';

const CreatedAtText = () => {
  return(
    <Text>1시간 전</Text>
  )
}

export default CreatedAtText

const Text = styled.div`
  width: 50px;
  height: 18px;

  ${body8};
  
  color: #FFFFFF;
`