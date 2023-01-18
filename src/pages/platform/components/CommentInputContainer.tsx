import React from 'react';
import styled from '@emotion/styled';
import SubmitButton from '../../../components/svgs/SubmitButton';
import {body4} from '@trevari/typo';
import {contents2} from '@trevari/typo';

const CommentInputContainer = () => {
  return (
      <InputBox>
        <InputText placeholder='자유롭게 생각을 공유해 보세요.'/>
        <ButtonBox>
          <SubmitButton/>
        </ButtonBox>
      </InputBox>
  )
}

export default CommentInputContainer

const InputBox = styled.div`
  width: 100%;
  height: 72px;
  
  display: flex;
  justify-content: space-between;
  
  padding: 20px;
  background: #222222;
`

const InputText = styled.textarea`

  justify-content: flex-start;

  width: 100%;

  background: #222222;
  
  ::placeholder {
    width: 78%;
    ${body4};
    
    background: #222222;
    color: #6E6E6C;
  }

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

  line-height: 120px;
  vertical-align: top;

  background: #222222;
  border: none;
  resize: none;

  ${contents2};
  color: #FFFFFF;
`

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`
