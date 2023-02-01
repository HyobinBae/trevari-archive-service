import React from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import ReportButton from './ReportButton';
import { useWindowSize } from '../../../../hooks/useWindowSize';

const EditButtonModal = () => {
  const {width} =useWindowSize()
  const bottomSheetLeftMarginPx = width > 500 ? 'calc(50vw - 250px)' : 0;

  return (
    <BottomSheet
      open={true}
      scrollLocking={true}
      style={{
      '--rsbs-ml': bottomSheetLeftMarginPx,
      '--rsbs-max-w': '500px',
      }}
      initialFocusRef={false}
    >

      <ReportButton/>
      <ReportButton/>
    </BottomSheet>
  )
}

export default EditButtonModal