import React from 'react';
import styled from '@emotion/styled';
import { BottomSheet } from 'react-spring-bottom-sheet';
import ReportButton from './ReportButton';


const EditButtonModal = () => {
  return (
    <BottomSheet open={true} scrollLocking={true}>
      <ReportButton/>
    </BottomSheet>
  )
}

export default EditButtonModal