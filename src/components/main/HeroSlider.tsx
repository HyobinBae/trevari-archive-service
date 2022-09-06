import { useEffect } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Base, Gradation, GradiantWrap, ImgLinkWrap, SwiperImg } from 'components/main/styles/main.style';
import 'swiper/css';
import 'swiper/css/pagination';
import 'components/main/styles/main.css';
import { PaginationOptions } from 'swiper/types';
import { useGetBannersQuery } from 'apis/user-backend-api/main';
import { Banner } from 'types/__generate__/user-backend-api';

const HeroSlider = () => {
  const { data: banners, isLoading, error } = useGetBannersQuery({});

  const clickBanner = (title: string) => {
    console.log('rolling banner title', title);
  };

  if (isLoading) {
    return <div>로딩중입니다.</div>;
  }
  if (error) {
    return <div>에러입니다.</div>;
  }

  const pagination: PaginationOptions = {
    clickable: true,
    type: 'fraction',
    renderFraction: (currentClass: string, totalClass: string) => {
      return (
        '<div class="custom-fraction">' +
        '<span class="' +
        currentClass +
        '"></span>' +
        ' / ' +
        '<span class="' +
        totalClass +
        '"></span>' +
        '</div>'
      );
    },
  };

  return (
    <Base>
      <GradiantWrap>
        <Swiper
          autoplay={true}
          loop={true}
          modules={[Pagination]}
          pagination={pagination}
          navigation={true}
          style={{ height: 'inherit', bottom: '0px' }}
        >
          {banners?.map(({ title, mobileImageUrl, linkUrl }: Banner) => {
            return (
              <SwiperSlide key={title}>
                <ImgLinkWrap className="wrap" href={linkUrl} onClick={() => clickBanner(title)}>
                  <SwiperImg src={mobileImageUrl} alt={title} />
                </ImgLinkWrap>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Gradation />
      </GradiantWrap>
    </Base>
  );
};

export default HeroSlider;
