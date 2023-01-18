import React from 'react';
import styled from '@emotion/styled';
import {heading10} from '@trevari/typo';


const Title = () => {
  return(
    <Text>내궁의 f&B 기획과 트렌드 읽기</Text>
  )
}

export default Title

const Text = styled.div`
  display: flex;
  justify-content: flex-start;
  
  width: 100%;
  height: 27px;
  padding-left: 20px;
  margin-bottom: 5px;

  ${heading10};
  
  color: #FFFFFF;
`
