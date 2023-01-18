import React from 'react';
import styled from '@emotion/styled';

const ContentDivider = () => {
  return(
    <Divider/>
  )
}

export default ContentDivider

const Divider = styled.div`
  width: 100%;
  height: 1px;
  
  flex: none;
  order: 1;
  flex-grow: 0;

  background: #383838;
`