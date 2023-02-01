import React from 'react';
import styled from '@emotion/styled';
import {body8} from '@trevari/typo';
import CheckCircle from '../../../../components/svgs/CheckCircle';

const alertMessage = '댓글이 삭제되었습니다.'
const EditAlertModal = () => {
  return(
    <>
      <ModalBox>
        <IconBox><CheckCircle/></IconBox>
        <Text>{alertMessage}</Text>
      </ModalBox>
    </>
  )
}
export default EditAlertModal

const ModalBox = styled.div`
  position: absolute;
  top: 22vh;
  left: 50%;
  transform: translate(-50%, -50%);
  
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  
  width: 70%;
  height: 52px;
  padding: 17px 16px;

  background: #2C2C2A;
  border-radius: 4px;
`

const IconBox = styled.div`
  display: flex;
  
  margin: 2px 9px 2px 2px;
`

const Text = styled.div`
  ${body8};
  
  color: #FFFFFF;
`

