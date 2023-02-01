import React from 'react';
import styled from "@emotion/styled";
import {contents2} from '@trevari/typo';

const CommentBody = () => {
const comment ='너무 좋은 독후감입니다. 저도 책을 읽으면서 비슷한 생각을 했어요. 픽션인듯 하지만 사실은 자신의 이야기를 그대로 담은 글을 읽으며 어떻게 에세이가 이렇게 다채로울 수 있을까 생각했답니다.'
  return(
    <CommentBox>
      <Content>{comment}</Content>
    </CommentBox>
  )
}

export default CommentBody;

const CommentBox = styled.div`
  color: #FFFFFF;
`

const Content = styled.div`
  width: 100%;
  margin-bottom: 20px;

  ${contents2};
`
