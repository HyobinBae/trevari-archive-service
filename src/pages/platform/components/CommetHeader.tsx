import React from 'react';
import styled from '@emotion/styled';
import ProfileBox from './ProfileBox';
import InfoBox from './InfoBox';

const CommentHeader = () => {
  return(
    <Header>
      <ProfileBox/>
      <InfoBox/>
    </Header>
  )
}
export default CommentHeader

const Header = styled.header`
  width: 100%;
  
  margin-bottom: 20px;
    
  display: flex;
  justify-content: space-between;
  align-items: center;
`
