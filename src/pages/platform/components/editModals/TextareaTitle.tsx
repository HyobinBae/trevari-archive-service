import React from 'react';
import styled from '@emotion/styled';
import {heading7} from '@trevari/typo';

const title = '댓글 수정하기';
const TextareaTitle = () => {
  return(
    <TextBox>
      <Text>{title}</Text>
    </TextBox>
  )
}

export default TextareaTitle

const TextBox = styled.div`
  display: flex;
  justify-content: flex-start;
  
  width: 100%;
  height: 31px;
  margin-bottom: 40px;

`

const Text = styled.div`
  width: 100%;
  margin-bottom: 40px;

  ${heading7};
  color: #FFFFFF;
`