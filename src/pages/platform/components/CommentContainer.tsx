import React from 'react';
import styled from '@emotion/styled';
import CommentTail from './CommentTail';
import CommentHeader from './CommetHeader';
import CommentBody from './CommentBody';
import ListDivider from './ListDivider';
import ReplyContainer from './ReplyContainer';


const CommentContainer = () => {
  return(
    <>
      <Container>
        <CommentHeader/>
        <CommentBody/>
        <CommentTail/>
      </Container>
      <ListDivider/>
      <ReplyContainer/>
      <ListDivider/>
    </>
  )
}

export default CommentContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  padding: 20px;
  width: 100%;
  
  background: #222222;
`
