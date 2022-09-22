import React from 'react';
import styled from '@emotion/styled';

import ClubCard from 'pages/main/components/ClubCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Club } from 'types/__generate__/user-backend-api';

interface IProps {
  clubs?: Club[] | null;
}

const CurationClubs = ({ clubs = [] }: IProps) => {
  return (
    <CurationClubsBase>
      <Swiper slidesPerView={1.8} spaceBetween={10}>
        {clubs?.map((club: Club) => (
          <SwiperSlide key={club.id}>
            <ClubCard key={club.id} club={club} />
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
