import React, { useReducer, useState } from 'react';
import { body3, heading10, heading11, heading5, heading9 } from '@trevari/typo';
import { format, isBefore } from 'date-fns';
import ko from 'date-fns/locale/ko';
import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import {
  MainCard,
  MainCardContent,
  MainCardFooterBanner,
  MainCardHero,
  MainCardParagraph,
  MainCardSubTitle,
  MainCardTitle,
  MainCardFooterText as _MainCardFooterText,
  MainCardFooter,
  GetStyles,
} from '@trevari/business-components';
import { Club } from 'types/__generate__/user-backend-api';
import LoveFilled from 'components/svgs/LoveFilled';
import LoveOutline from 'components/svgs/LoveOutline';

import { confirmAuth, selectUserId } from 'services/auth/auth.store';
import { useAppDispatch, useAppSelector } from 'services/store';
import { mainApi } from 'pages/main/services/main.api';
import { selectWishClubIds } from 'pages/main/services/main.store';

export interface IProps {
  club: Club;
}

const ARGS = {
  animationDuration: 0,
};

type Props = typeof ARGS;

const styles = css({
  display: 'flex',
  alignItems: 'center',
});

const overflowNoneStyles = css({
  position: 'relative',
  overflow: 'hidden',
});

const layerStyle: GetStyles = () => overflowNoneStyles;

const mainCardFooterStyle: GetStyles = () => styles;

const ClubCard = (props: Props | IProps) => {
  const dispath = useAppDispatch();
  const selectedUserId = useAppSelector(selectUserId);
  const wishClubs = useAppSelector(selectWishClubIds);
  const {
    club: {
      id,
      name,
      place: { name: placeName },
      coverUrl,
      leaderTitle,
      clubGroup,
      memberCount,
      maxMemberCount,
      openedAt,
      description,
      meetings,
      isBookmark,
      seasonID,
    },
  } = props;
  const isFullClub = memberCount >= maxMemberCount;
  const openingReservation = isBefore(new Date(), Date.parse(openedAt));
  const desc = description ? description : clubGroup && clubGroup.description;
  const [open] = useReducer(prev => !prev, isBefore(new Date(), Date.parse(openedAt)));
  const [isCheckedBookmark, setCheckBookmark] = useState<boolean>(isBookmark);
  const {
    colors: { orange900 },
  } = useTheme();

  const handleClickBookmark = (clubId: string) => {
    setCheckBookmark(state => !state);
    dispath(confirmAuth());
    if (wishClubs.includes(clubId)) {
      dispath(mainApi.endpoints.deleteWishClub.initiate({ clubID: clubId, userID: selectedUserId }));
    } else {
      dispath(
        mainApi.endpoints.createWishClub.initiate({
          input: {
            clubID: clubId,
            season: seasonID,
            userID: selectedUserId,
          },
        }),
      );
    }
  };

  const MainHeartFooter = (props: Props | IProps) => {
    const firstMeeting = format(Date.parse(meetings[0].startedAt), 'M/d(EEE)', {
      locale: ko,
    });
    const meetingStartedAt = format(Date.parse(meetings[0].startedAt), 'HH:mm', {
      locale: ko,
    });
    const meetingEndedAt = format(Date.parse(meetings[0].endedAt), 'HH:mm', {
      locale: ko,
    });

    return (
      <MainCardFooter styles={mainCardFooterStyle}>
        <MainCardFooterBanner open={open} animationDuration={props.animationDuration}>
          찜하고 오픈 알림을 받아보세요.
        </MainCardFooterBanner>
        <HeartButtonWrapper onClick={() => handleClickBookmark(id)}>
          {isCheckedBookmark ? (
            <LoveFilled width={24} height={24} color={orange900} />
          ) : (
            <LoveOutline width={24} height={24} />
          )}
        </HeartButtonWrapper>
        <div style={{ flex: 1 }}>
          <MainFooterText>
            {placeName} | 첫 모임일 {firstMeeting} {meetingStartedAt} ~ {meetingEndedAt}
          </MainFooterText>
        </div>
      </MainCardFooter>
    );
  };

  const renderLayer = (text: string) => {
    return (
      <DimLayer>
        <LayerTextWrap>
          <LayerText>{text}</LayerText>
          {text.includes('오픈') && (
            <LayerSmallText>{format(Date.parse(openedAt), 'M/D(ddd) a h시', { locale: ko })}</LayerSmallText>
          )}
        </LayerTextWrap>
      </DimLayer>
    );
  };

  return (
    <MainCard
      style={{ width: '100%' }}
      hero={
        <MainCardHero className={'club-card'} styles={layerStyle}>
          <MainCardImg src={coverUrl} />
          {isFullClub && renderLayer('꽉 찼어요!')}
          {openingReservation && renderLayer('오픈 예정')}
          {/*{renderSticker}*/}
        </MainCardHero>
      }
      footer={<MainHeartFooter {...props} />}
    >
      <MainCardContent>
        <MainCardTitle>{name}</MainCardTitle>
        <MainCardSubTitle>{leaderTitle}</MainCardSubTitle>
        <MainCardParagraph>{desc}</MainCardParagraph>
      </MainCardContent>
    </MainCard>
  );
};

export default ClubCard;

export const HeartButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff7e0;
  border-radius: 4px;
  height: 36px;
  width: 32px;
`;

export const MainFooterText = styled(_MainCardFooterText)`
  padding-left: 0.5rem;
`;

const CustomMainCardSubTitle = styled(MainCardSubTitle)`
  ${heading10};
`;
const CustomMainCardParagraph = styled(MainCardParagraph)`
  ${body3};
  width: 100%;
`;

const CustomMainCardContent = styled(MainCardContent)`
  ${({ theme }) => theme.breakPoint.mobile} {
    padding-bottom: 40px;
  } ;
`;

const DimLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background: ${({ theme }) => theme.colors.overlay50};
`;
const LayerTextWrap = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const LayerText = styled.p`
  ${heading5};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.breakPoint.mobile} {
    ${heading9}
  } ;
`;
const LayerSmallText = styled.p`
  ${heading11};
  color: ${({ theme }) => theme.colors.white};
`;

const MainCardImg = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
