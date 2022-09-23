import React from 'react';
import styled from '@emotion/styled';

import ClubCard from 'pages/main/components/ClubCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Club, Tag } from 'types/__generate__/user-backend-api';

interface IProps {
  clubs?: Club[] | null;
  tag: Tag;
}

const CurationClubs = ({ clubs = [], tag }: IProps) => {
  return (
    <CurationClubsBase>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={10}
        style={{ paddingRight: '20px' }}
        breakpoints={{
          500: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
        }}
      >
        {clubs?.map((club: Club) => (
          <SwiperSlide key={`${club.id}+${tag.id}`}>
            <ClubCard club={club} tag={tag} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CurationClubsBase>
  );
};

export default CurationClubs;

export const CurationClubsBase = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 0 0 0 20px;
`;
