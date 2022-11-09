import React from 'react';
import styled from '@emotion/styled';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Club } from 'types/__generate__/user-backend-api';
import NewCurationClubCard from './NewCurationClubCard';
import { useWindowSize } from 'hooks/useWindowSize';

interface IProps {
  clubs?: Club[] | null;
}

const NewCurationCardList = ({ clubs = [] }: IProps) => {
  const { width } = useWindowSize();

  const clubCardWidth = width > 500 ? 'calc(460px / 2.1)' : 'calc((100vw - 40px) / 2.1)';
  const clubCardImgHeight = width > 500 ? 'calc(460px * 0.9 / 2.1)' : 'calc((100vw - 40px) * 0.9 / 2.1)';
  return (
    <CurationClubsBase>
      {clubs?.length > 2 ? (
        <Swiper
          slidesPerView={2.1}
          style={{ paddingRight: '20px' }}
          spaceBetween={20}
          centeredSlides={false}
          breakpoints={{
            500: {
              slidesPerView: 2.1,
              spaceBetween: 20,
            },
          }}
        >
          {clubs?.map((club: Club) => (
            <SwiperSlide key={`${club.id}`}>
              <NewCurationClubCard cardWidth="100%" club={club} imgHeight={clubCardImgHeight} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <ClubList>
          {clubs?.map((club: Club) => (
            <NewCurationClubCard cardWidth={clubCardWidth} imgHeight={clubCardImgHeight} key={club.id} club={club} />
          ))}
        </ClubList>
      )}
    </CurationClubsBase>
  );
};

export default NewCurationCardList;

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
  gap: 10px;
`;
