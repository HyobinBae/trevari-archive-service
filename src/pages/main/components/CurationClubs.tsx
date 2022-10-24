import React from 'react';
import styled from '@emotion/styled';

import ClubCard from 'pages/main/components/ClubCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Club, Tag } from 'types/__generate__/user-backend-api';
import { ICustomTag } from '../services/main.types';

interface IProps {
  clubs?: Club[] | null;
  tag: ICustomTag | Tag;
}

const CurationClubs = ({ clubs = [], tag }: IProps) => {
  return (
    <CurationClubsBase>
      {clubs?.length > 2 ? (
        <Swiper
          slidesPerView={1.5}
          spaceBetween={10}
          style={{ paddingRight: '20px' }}
          centeredSlides={false}
          breakpoints={{
            500: {
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
      ) : (
        <ClubList>
          {clubs?.map((club: Club) => (
            <ClubCard
              key={`${club.id}+${tag.id}`}
              club={club}
              tag={tag}
              style={{ marginRight: '10px', minWidth: '230px' }}
            />
          ))}
        </ClubList>
      )}
    </CurationClubsBase>
  );
};

export default CurationClubs;

export const CurationClubsBase = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 0 0 0 20px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const ClubList = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden;
`;
