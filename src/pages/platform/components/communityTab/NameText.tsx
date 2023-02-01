import React from 'react';
import styled from '@emotion/styled';
import {title6} from '@trevari/typo';

const NameText = () => {
  return(
    <TextBox>
      <Text>유재석</Text>
    </TextBox>

  )
}
export default NameText

const TextBox = styled.div`
  display: flex;
  justify-content: flex-start;
  
  margin-left: 10px;
`

const Text = styled.div`
  ${title6};
  
  width: 199px;
  color: #FFFFFF;
`