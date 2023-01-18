import React from 'react';
import styled from '@emotion/styled';
import ReactButton from './ReactButton';
import ReplyButton from './ReplyButton';

const CommentTail = () => {
  return (
    <CommentTailContainer>
      <ReactButton/>
      <ReplyButton/>
    </CommentTailContainer>
  )
}

export default CommentTail

const CommentTailContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  background: #222222;
`


