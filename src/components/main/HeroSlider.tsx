import { useAtom } from 'jotai';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { bannersAtom } from 'apis/user_backend_api';
import { Base, Gradation, ImgLinkWrap, SwiperImg } from 'components/main/styles/main.style';
import 'swiper/css';
import 'swiper/css/pagination';
import 'components/main/styles/main.css';
import { PaginationOptions } from 'swiper/types';

const HeroSlider = () => {
  const [{ data, error }] = useAtom(bannersAtom);

  const clickBanner = (title: string) => {
    console.log('rolling banner title', title);
  };

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
      <Swiper
        autoplay={true}
        loop={true}
        modules={[Pagination]}
        pagination={pagination}
        navigation={true}
        style={{ height: 'inherit', bottom: '0px' }}
      >
        {data.banners.map(({ title, mobileImageUrl, linkUrl }) => {
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
    </Base>
  );
};

export default HeroSlider;
