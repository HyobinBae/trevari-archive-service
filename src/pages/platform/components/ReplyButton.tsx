import React from "react";
import styled from "@emotion/styled";
import {title4} from '@trevari/typo';
import CommentIcon from '../../../components/svgs/CommentIcon';

const ReplyButton = () => {
  return (
    <Button>
      <CommentIcon/>
      <ReplyText>답글 쓰기</ReplyText>
    </Button>
    )
}

export default ReplyButton;

const Button = styled.button`
  border-style: none;
  
  background: #222222;
  
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const ReplyText = styled.div`
  width: 58px;
  
  ${title4};
  
  display: flex;
  align-items: center;
  
  margin-left: 5px;

  color: #838380;
`

