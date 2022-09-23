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
      <Swiper slidesPerView={1.8} spaceBetween={10}>
        {clubs?.map((club: Club) => (
          <SwiperSlide key={club.id}>
            <ClubCard key={club.id} club={club} tag={tag} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CurationClubsBase>
  );
};

export default CurationClubs;

export const CurationClubsBase = styled.div`
  max-width: 1200px;
  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  place-content: space-between flex-start;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 0 0 0 20px;
`;

export const CurationsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: 0 0 20px 0;
  overflow-x: scroll;
`;
