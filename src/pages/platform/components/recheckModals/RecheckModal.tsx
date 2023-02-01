import React from 'react';
import styled from '@emotion/styled';
import {body5} from '@trevari/typo';
import CancelButton from './CancelButton';
import AgreeButton from './AgreeButton';
import DimBackground from '../editModals/DimBackground';

const alertMessage = '답글을 정말로 삭제하시겠어요?'
const EditAlertModal = () => {
  return(
    <>
      <DimBackground/>
      <ModalBox>
        <TextBox>
          <Text>{alertMessage}</Text>
        </TextBox>
        <ButtonBox>
          <CancelButton/>
          <AgreeButton/>
        </ButtonBox>
      </ModalBox>
    </>
  )
}
export default EditAlertModal

const ModalBox = styled.div`
  position: absolute;
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 70%;
  padding: 24px;

  background: #222222;
  border-radius: 6px;
`

const TextBox = styled.div`
  width: 100%;
  margin-bottom: 24px;
`

const Text = styled.div`
  ${body5};

  color: #FFFFFF;
`

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`


