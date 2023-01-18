import React from 'react';
import styled from '@emotion/styled';
import {title2} from '@trevari/typo';
import ContentDivider from './ContentDivider';
import { BookIcon } from '@trevari/icons';

const subTitle = '2022년 11월 베이커리에 관하여 w. GFFG 베이커리에 관하여 w. GFFG '
const ReplayContent = () => {
  return(
    <>
      <Container>
        <IconBox>
          <BookIcon/>
        </IconBox>
        <TextBox>
          <Text>{subTitle}</Text>
          <UnderLine/>
        </TextBox>
      </Container>
      <ContentDivider/>
    </>
  )
}

export default ReplayContent

const Container = styled.li`
  width: 100%;
  
  display: flex;
  justify-content: space-between;
  
  list-style: none;
  padding: 24px 30px 24px 24px;
  
  background: #222222;
`
const IconBox = styled.div`
  margin-right: 12px;  
`

const Text = styled.div`
  width: 87%;
  height: 24px;
  
  ${title2};
  color: #ADADAA;
  
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const UnderLine = styled.div`
  width: 87%;
  height: 1px;
  background: #ADADAA;
`

const TextBox = styled.div``
