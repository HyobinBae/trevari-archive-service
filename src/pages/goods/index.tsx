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
        src="https://image.trevari.co.kr/file/7196a19a-213b-44a4-bb98-d9b94d441c64.%E1%84%89%E1%85%B2%E1%84%91%E1%85%A5%E1%84%86%E1%85%A1%E1%84%8F%E1%85%A6%E1%87%80%20%E1%84%80%E1%85%AE%E1%86%BA%E1%84%8C%E1%85%B3%20%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A6%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B510.17.jpg"
        alt={'goods-detail'}
      />
      <FixedBottomButton text="예약하고 아지트에서 픽업하기" onClick={() => navigate('/external')} />
    </Box>
  );
};

export default Goods;
