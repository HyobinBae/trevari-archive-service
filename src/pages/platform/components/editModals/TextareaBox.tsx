import React from 'react';
import styled from '@emotion/styled';
import {heading7} from '@trevari/typo';
import { body4 } from '@trevari/typo';
import EditorSubmitButton from './EditorSubmitButton';

const TextareaBox = () => {
  return(
    <BorderBox>
      <Box/>
      <EditorSubmitButton/>
    </BorderBox>

  )
}

export default TextareaBox

const BorderBox = styled.div`
  position: fixed;
  bottom: 0;
  
  width: 100%;
  height: 194px;
  
  margin-bottom: 40px;
  padding: 10px 16px;
  
  ${heading7};
  color: #FFFFFF;
  border: 1px solid #4E4E4C;
  
  border-radius: 3px;
`

const Box = styled.textarea`
  :focus{
    outline: none;
  }
  
  ::-webkit-scrollbar {
    display: none;
  }
  
  {
  -ms-overflow-style: none;
  scrollbar-width: none;
  }
  
  display: inline-block;
 
  width: 100%;
  height: 120px;
  line-height: 120px;
  vertical-align: top;
  
  background: #222222;
  border: none;
  resize: none;

  ${ body4 };
  color: #FFFFFF;

`