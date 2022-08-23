import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '@emotion/styled';

type banner = {
  title: string;
  pcImageUrl?: string;
  mobileImageUrl?: string;
  linkUrl: string;
};

interface IProps {
  className?: string;
  banners: banner[];
}

const HeroSlider = ({ className, banners }: IProps) => {
  const clickBanner = (title: string) => {
    console.log('rolling banner title', title);
  };

  return (
    <Swiper
      className={className}
      autoplay={true}
      loop={true}
      pagination={{
        type: 'bullets',
        clickable: true,
      }}
      style={{ height: 'inherit', bottom: '0px' }}
    >
      {banners.map(({ title, mobileImageUrl, linkUrl }) => {
        return (
          <SwiperSlide key={title}>
            <ImgLinkWrap className="wrap" href={linkUrl} onClick={() => clickBanner(title)}>
              <SwiperImg src={mobileImageUrl} alt={title} />
            </ImgLinkWrap>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;

const ImgLinkWrap = styled.a`
  ${({ theme }) => theme.breakPoint.mobile} {
    display: block;
    height: auto;
    width: 100%;
    object-fit: cover;
  }
  position: relative;
  height: 320px;
  width: 100%;
`;

const SwiperImg = styled.img`
  width: 100%;
`;
