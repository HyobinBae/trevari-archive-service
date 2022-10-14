import React from 'react';
import FixedBottomButton from 'components/base/FixedBottomButton';
import { ImageWrap } from 'pages/goods/goods.styles';

const Goods = () => {
  return (
    <>
      <ImageWrap
        src="https://image.trevari.co.kr/file/fbfaaf08-46f7-4561-9fc8-2b982f8a3981.goods_detail.jpg"
        alt={'goods-detail'}
      />
      <FixedBottomButton
        text="예약하고 아지트에서 픽업하기"
        onClick={() =>
          window.open(
            'https://docs.google.com/forms/d/e/1FAIpQLSfv9vUQrT_AAQvHfQYrJrTMdZbE9tEvUd4xCcfcBmMUBY2_pQ/viewform?usp=pp_url',
          )
        }
      />
    </>
  );
};

export default Goods;
