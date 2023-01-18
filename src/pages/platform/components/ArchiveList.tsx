import React from 'react';
import styled from '@emotion/styled';
import ArchiveContentContainer from './ArchiveContentContainer';


const ArchiveList = () => {
  return(
    <List>
      <ArchiveContentContainer/>
    </List>
  )
}

export default ArchiveList

const List = styled.div`
  background: #222222;
`