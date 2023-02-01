import React from 'react';
import styled from '@emotion/styled';
import TextareaTitle from './TextareaTitle';
import TextareaBox from './TextareaBox';
import CloseButtonContainer from '../platformMain/CloseButtonContainer';

const CommentEditor = () => {
  return (
    <>
      <CloseButtonContainer/>
      <Container>
        <TextareaTitle/>
        <TextareaBox/>
      </Container>
    </>
  )
}
export default CommentEditor

const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  padding: 0px 20px;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  background: #222222;
`
