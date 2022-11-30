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
import { endpoints } from 'config';
import RightChevron from '../../../components/svgs/RightChevron';
import { Loading } from '@trevari/components';

const HeroSlider = () => {
  const { data: banners, isLoading } = useGetBannersQuery({});

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

  const onClickFindClubBox = () => {
    ga.event({ action: '버튼 클릭', category: '메인 페이지', label: '어떤 클럽을 찾으세요?' });
  };
  if (isLoading) return <Loading variant="banner" />;
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
      <GoApplyPageBox href={`${endpoints.user_page_url}/apply`} onClick={onClickFindClubBox}>
        <div>어떤 클럽을 찾으세요?</div>
        <RightChevron width={24} height={24} fill={'#FF7900'} />
      </GoApplyPageBox>
    </Base>
  );
};

export default HeroSlider;
