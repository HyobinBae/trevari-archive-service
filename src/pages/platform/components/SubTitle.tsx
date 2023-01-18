import React from 'react';
import styled from '@emotion/styled';
import {body8} from '@trevari/typo';

const SubTitle = () => {
  return(
    <Text>F&B와 브랜딩_베이커리에 관하여 w/ 이준범 GFFG 대표</Text>
  )
}

export default SubTitle

const Text = styled.div`
  display: flex;
  justify-content: flex-start;
  
  width: 100%;
  height: 18px;
  padding-left: 20px;

  ${body8};
  
  color: #ADADAA;
  background: #222222;
`