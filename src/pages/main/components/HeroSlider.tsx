import React from 'react';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PaginationOptions } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/pagination';

import { useGetBannersQuery } from 'pages/main/services/main.api';
import { Banner } from 'types/__generate__/user-backend-api';
import { Base, GradiantWrap, ImgLinkWrap, SwiperImg, GoApplyPageBox } from 'pages/main/styles/main.style';
import 'pages/main/styles/main.css';
import ga from 'pages/main/ga';
import Loading from 'components/base/Loading';
import { RightChevronIcon } from '@trevari/icons';
import { endpoints } from 'config';

const HeroSlider = () => {
  const { data: banners } = useGetBannersQuery({});

  const clickBanner = (title: string) => {
    console.log('!rolling banner title!', title);
    ga.event({ action: '롤링 배너 클릭', category: '메인 페이지', label: title });
  };

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

  if (!banners) return <Loading />;
  return (
    <Base>
      <GradiantWrap>
        <Swiper
          autoplay={true}
          loop={true}
          modules={[Pagination, Autoplay]}
          pagination={pagination}
          navigation={true}
          style={{ height: 'inherit', bottom: '0px' }}
        >
          {banners
            ?.filter(({ isClosed }) => isClosed === false)
            .map(({ title, mobileImageUrl, linkUrl }: Banner) => {
              return (
                <SwiperSlide key={title}>
                  <ImgLinkWrap className="wrap" href={linkUrl} onClick={() => clickBanner(title)}>
                    <SwiperImg src={mobileImageUrl} alt={title} />
                  </ImgLinkWrap>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </GradiantWrap>
      <GoApplyPageBox href={`${endpoints.user_page_url}/apply`}>
        <div>어떤 클럽을 찾으세요?</div>
        <RightChevronIcon width="24" height="24" color="#FF7900" />
      </GoApplyPageBox>
    </Base>
  );
};

export default HeroSlider;
