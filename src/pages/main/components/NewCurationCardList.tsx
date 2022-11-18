import React, { Fragment } from 'react';
import styled from '@emotion/styled';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import NewCurationClubCard from './NewCurationClubCard';
import { useWindowSize } from 'hooks/useWindowSize';
import { IClub, IEvent } from '../services/main.types';
import NewCurationEventCard from './NewCurationEventCard';
import { CURATION_CARD_ASPECT_RATIO } from '../const';

interface IProps {
  lists?: Array<IClub | IEvent>;
  wishClubIds?: Array<string>;
}

const NewCurationCardList = ({ lists = [], wishClubIds = [] }: IProps) => {
  const { width } = useWindowSize();

  const cardWidth = width > 500 ? 'calc(460px / 2.1)' : 'calc((100vw - 40px) / 2.1)';
  const cardImgHeight =
    width > 500
      ? `calc(460px * ${CURATION_CARD_ASPECT_RATIO} / 2.1)`
      : `calc((100vw - 40px) * ${CURATION_CARD_ASPECT_RATIO} / 2.1)`;
  const isClubCuration = (item: IClub | IEvent) => {
    if ('coverUrl' in item) {
      return true;
    }
    return false;
  };
  return (
    <CurationClubsBase>
      {lists?.length > 2 ? (
        <Swiper
          slidesPerView={2.1}
          style={{ paddingRight: '20px' }}
          spaceBetween={10}
          centeredSlides={false}
          breakpoints={{
            500: {
              slidesPerView: 2.1,
              spaceBetween: 20,
            },
          }}
        >
          {lists?.map((item: IClub | IEvent) => (
            <SwiperSlide key={`${item.id}`}>
              {isClubCuration(item) ? (
                <NewCurationClubCard
                  isWishClub={wishClubIds.includes(item.id)}
                  cardWidth="100%"
                  club={item}
                  imgHeight={cardImgHeight}
                />
              ) : (
                <NewCurationEventCard event={item} cardWidth="100%" imgHeight={cardImgHeight} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <ClubList>
          {lists?.map((item: IClub | IEvent) => (
            <Fragment key={item.id}>
              {isClubCuration(item) ? (
                <NewCurationClubCard
                  isWishClub={wishClubIds.includes(item.id)}
                  cardWidth={cardWidth}
                  club={item}
                  imgHeight={cardImgHeight}
                />
              ) : (
                <NewCurationEventCard event={item} cardWidth={cardWidth} imgHeight={cardImgHeight} />
              )}
            </Fragment>
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
