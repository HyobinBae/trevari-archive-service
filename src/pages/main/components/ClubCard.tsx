import React, { useState } from 'react';
import { heading11, heading5, heading9 } from '@trevari/typo';
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
import { Tag } from 'types/__generate__/user-backend-api';
import LoveFilled from 'components/svgs/LoveFilled';
import LoveOutline from 'components/svgs/LoveOutline';

import { confirmAuth, selectUserId } from 'services/auth/auth.store';
import { useAppDispatch, useAppSelector } from 'services/store';
import { createWishClub, deleteWishClub } from 'pages/main/services/main.api';
import { selectWishClubIds } from 'pages/main/services/main.store';

import { IClub } from 'pages/main/services/main.types';
import RenderStickers from 'pages/main/components/RenderSticker';
import { toastAlert } from 'services/ui.store';
import { selectUser } from 'services/user/user.store';
import { updateUser } from 'services/user/user.api';
import { endpoints } from 'config';
import ga from 'pages/main/ga';

export interface IProps {
  club: IClub;
  tag: Tag;
  style: any;
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

const ClubCard = (props: Props & IProps) => {
  const dispatch = useAppDispatch();
  const selectedUserId = useAppSelector(selectUserId);
  const { isAgreedToAllMarketing } = useAppSelector(selectUser);
  const wishClubs = useAppSelector(selectWishClubIds);
  const {
    style,
    club: {
      id,
      name,
      place,
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
  const openingReservation = isBefore(new Date(), Date.parse(openedAt as string));
  const desc = description ? description : clubGroup && clubGroup.description;
  const [isCheckedBookmark, setCheckBookmark] = useState<boolean>(isBookmark);
  const {
    colors: { orange900 },
  } = useTheme();

  const handleClickBookmark = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, clubId: string) => {
    e.stopPropagation();
    setCheckBookmark(state => !state);
    dispatch(confirmAuth());
    if (wishClubs.includes(clubId)) {
      dispatch(deleteWishClub.initiate({ clubID: clubId, userID: selectedUserId }));
    } else {
      dispatch(
        createWishClub.initiate({
          input: {
            clubID: clubId,
            season: seasonID,
            userID: selectedUserId,
          },
        }),
      );
      toastAlert({
        open: true,
        type: 'info',
        text: `이 클럽, 놓치지 않을 거예요. 마감이 임박하면 문자를 발송드려요!\n
            (마케팅 정보 수신 동의 시에만 발송되며, 오후 9시 ~ 익일 오전 8시에는 발송하지 않습니다)`,
      });
    }

    if (!isAgreedToAllMarketing) {
      const isConfirmed = confirm(
        '마케팅 정보 수신자만 오픈 알림 문자를 받으실 수 있습니다. 마케팅 정보 수신에 동의하시겠습니까?',
      );
      if (isConfirmed) {
        dispatch(
          updateUser.initiate({
            input: {
              id: selectedUserId,
              isAgreedToAllMarketing: true,
            },
          }),
        );
      }
    }
  };

  const MainHeartFooter = (props: Props & IProps) => {
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
        <MainCardFooterBanner open={openingReservation} animationDuration={props.animationDuration}>
          찜하고 오픈 알림을 받아보세요.
        </MainCardFooterBanner>
        <HeartButtonWrapper onClick={e => handleClickBookmark(e, id)}>
          {isCheckedBookmark ? (
            <LoveFilled width={24} height={24} color={orange900} />
          ) : (
            <LoveOutline width={24} height={24} />
          )}
        </HeartButtonWrapper>
        <div style={{ flex: 1 }}>
          <MainFooterText>
            {place?.name} | 첫 모임일 {firstMeeting} {meetingStartedAt} ~ {meetingEndedAt}
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
            <LayerSmallText>{format(Date.parse(openedAt as string), 'M/d(EEE) a h시', { locale: ko })}</LayerSmallText>
          )}
        </LayerTextWrap>
      </DimLayer>
    );
  };

  const handleClickClub = (clubID: string, tagID?: string) => {
    ga.event({ category: '메인 페이지', action: '클럽 카드 클릭', label: `${name}^${clubID}` });
    window.location.href = `${endpoints.user_page_url}/clubs/show?clubID=${clubID}${tagID ? `&tagID=${tagID}` : ''}${
      memberCount >= maxMemberCount ? `&status=FullClub` : ''
    }`;
  };

  return (
    <ClubCardContainer style={{ ...style }} onClick={() => handleClickClub(id, props.tag?.id)}>
      <MainCard
        style={{ width: '100%' }}
        hero={
          <MainCardHeroImageWrap className={'club-card'} styles={layerStyle}>
            <MainCardImg src={coverUrl as string} />
            {isFullClub && renderLayer('꽉 찼어요!')}
            {openingReservation && renderLayer('오픈 예정')}
            <RenderStickers club={props.club} />
          </MainCardHeroImageWrap>
        }
        footer={<MainHeartFooter {...props} />}
      >
        <MainCardContent>
          <MainCardTitle>{name}</MainCardTitle>
          <MainCardSubTitle>{leaderTitle}</MainCardSubTitle>
          <MainCardParagraph>{desc}</MainCardParagraph>
        </MainCardContent>
      </MainCard>
    </ClubCardContainer>
  );
};

export default ClubCard;

export const ClubCardContainer = styled.div`
  cursor: pointer;
`;

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
const MainCardHeroImageWrap = styled(MainCardHero)`
  @media (min-width: 0) and (max-width: 500px) {
    height: 150px;
  }
  @media (min-width: 500px) and (max-width: 10800px) {
    height: 120px;
  }
`;
