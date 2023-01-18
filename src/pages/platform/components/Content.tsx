import React from 'react';
import VodIcon from '../../../components/svgs/VodIcon';
import styled from '@emotion/styled';
import {title2} from '@trevari/typo';


const subTitle = '2022년 11월 베이커리에 관하여 2022년 11월 베이커리에 관하여'
const Content = () => {
  return(
    <Container>
        <IconBox>
          <VodIcon/>
        </IconBox>
        <TextBox>
          <Text>{subTitle}</Text>
        </TextBox>
    </Container>
  )
}

export default Content

const Container = styled.li`
  width: 100%;
  
  display: flex;
  justify-content: flex-start;
  
  list-style: none;
  padding: 0;
  
  background: #222222;
`
const IconBox = styled.div`
  margin-right: 12px;  
`

const Text = styled.div`
  max-width: 400px;
  height: 24px;
  
  ${title2};
  color: #ADADAA;
  
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  border-bottom: 1px solid #ADADAA;
`

const TextBox = styled.div`
`

