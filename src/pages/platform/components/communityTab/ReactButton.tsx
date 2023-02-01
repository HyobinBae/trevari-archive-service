import React from "react";
import styled from "@emotion/styled";
import HeartFilled from '../../../../components/svgs/HeartFilled';
import { title4 } from '@trevari/typo';

const ReactButton = () => {
  return (
    <Button>
      <HeartButtonContainer>
        <HeartFilled/>
      </HeartButtonContainer>
      <ReactTextContainer>
        <ReactText>좋아요</ReactText>
        <ReactSum>{12}</ReactSum>
      </ReactTextContainer>
    </Button>
    )
}

export default ReactButton;

const Button = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  border-style: none;

  background: #222222;
`

const HeartButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-right: 5px;
`

const ReactTextContainer = styled.div`
  width: 58px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ReactText = styled.div`
  ${title4};
  
  color: #838380;
`

const ReactSum = styled.div`
  ${title4};
  
  color: #838380;
`

