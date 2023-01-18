import React from 'react';
import styled from '@emotion/styled';
import InputTitle from './InputTitle';
import InputBox from './InputBox';
import CloseButtonContainer from './CloseButtonContainer';

const EditorWindow = () => {
  return (
    <>
      <CloseButtonContainer/>
      <Container>
        <InputTitle/>
        <InputBox/>
      </Container>
    </>
  )
}
export default EditorWindow

const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  padding: 0px 20px;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  background: #222222;
`
