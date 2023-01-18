import React from 'react';
import styled from '@emotion/styled';
import CommentContainer from './CommentContainer';

const CommentListContainer = () => {
  return(
    <Container>
      <CommentContainer/>
    </Container>
  )
}

export default CommentListContainer

const Container = styled.div`
  overflow: scroll
`