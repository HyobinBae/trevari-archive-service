import React from 'react';
import { useNavigate } from 'react-router-dom';

import FixedBottomButton from 'components/base/FixedBottomButton';
import { ImageWrap } from 'pages/goods/goods.styles';
import Box from 'components/base/Box';

const Goods = () => {
  const navigate = useNavigate();

  return (
    <Box style={{ paddingTop: '48px' }}>
      <ImageWrap
        src="https://image.trevari.co.kr/file/26d5f87f-a9e1-4697-af64-b352b30a0055.detail.jpg"
        alt={'goods-detail'}
      />
      <FixedBottomButton text="예약하고 아지트에서 픽업하기" onClick={() => navigate('/external')} />
    </Box>
  );
};

export default Goods;
