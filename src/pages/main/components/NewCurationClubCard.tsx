import styled from '@emotion/styled';
import {
  DisplayCard,
  DisplayCardContent,
  DisplayCardHero,
  DisplayCardMeetingInfo,
  DisplayCardParagraph,
  DisplayCardPlaceInfo,
  DisplayCardSubTitle,
  DisplayCardTitle,
} from '@trevari/business-components';
import { Badge } from '@trevari/components';
import LoveFilled from 'components/svgs/LoveFilled';
import { format, isBefore } from 'date-fns';
import ko from 'date-fns/locale/ko';
import { useState } from 'react';
import { IClub } from '../services/main.types';
import { confirmAuth, selectUserId } from 'services/auth/auth.store';
import { useAppDispatch, useAppSelector } from 'services/store';
import { createWishClub, deleteWishClub } from 'pages/main/services/main.api';
import ga from 'pages/main/ga';
import { toastAlert } from 'services/ui.store';
import { selectUser } from 'services/user/user.store';
import { updateUser } from 'services/user/user.api';
import { clubStatus } from 'utils/club';
import { heading9, title6 } from '@trevari/typo';
import LoveOutlineOpacityApplied from 'components/svgs/LoveOutlineOpacityApplied';
import { goToPage } from 'utils';
import { endpoints } from 'config';
import RightChevron from 'components/svgs/RightChevron';

interface NewCurationClubCardProps {
  club: IClub;
  isWishClub: boolean;
  cardWidth?: string;
  imgHeight?: string;
}

const NewCurationClubCard = ({
  club,
  isWishClub,
  cardWidth = '152px',
  imgHeight = '138px',
}: NewCurationClubCardProps) => {
  const {
    id,
    name,
    description,
    leaderTitle,
    coverUrl,
    place,
    meetings,
    clubGroup,
    seasonID,
    openedAt,
    memberCount,
    maxMemberCount,
  } = club;
  const desc = description ? description : clubGroup && clubGroup.description;
  const dispatch = useAppDispatch();
  const selectedUserId = useAppSelector(selectUserId);
  const { isAgreedToAllMarketing } = useAppSelector(selectUser);
  const [isAgreedToReceiveMarketingInfo, setAgreedToReceiveMarketingInfo] = useState(isAgreedToAllMarketing);
  const isFullClub = memberCount >= maxMemberCount;
  const openingReservation = isBefore(new Date(), Date.parse(openedAt as string));

  const handleClickBookmark = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    dispatch(confirmAuth());
    if (isWishClub) {
      dispatch(deleteWishClub.initiate({ clubID: id, userID: selectedUserId }));
    } else {
      dispatch(
        createWishClub.initiate({
          input: {
            clubID: id,
            season: seasonID,
            userID: selectedUserId,
          },
        }),
      );
      ga.event({ action: '찜하기', category: '메인 페이지', label: `${name}^${id}` });

      toastAlert({
        open: true,
        type: 'info',
        text: `이 클럽, 놓치지 않을 거예요. 마감이 임박하면 문자를 발송드려요!\n
          (마케팅 정보 수신 동의 시에만 발송되며, 오후 9시 ~ 익일 오전 8시에는 발송하지 않습니다)`,
      });

      if (!isAgreedToReceiveMarketingInfo) {
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
          setAgreedToReceiveMarketingInfo(true);
        }
      }
    }
  };

  const firstMeeting = meetings
    ? format(Date.parse(meetings[0].startedAt), 'M/d(EEE)', {
        locale: ko,
      })
    : '';
  const meetingStartedAt = meetings
    ? format(Date.parse(meetings[0].startedAt), 'HH:mm', {
        locale: ko,
      })
    : '';

  const onClickClubCard = () => {
    goToPage(`${endpoints.user_page_url}/clubs/show?clubID=${id}`);
  };
  const badgeText = clubStatus(club);
  const badgeColor = badgeText === 'NEW' ? '#1371FF' : 'black';
  const titleMarginTopPx = badgeText ? '6px' : '0px';
  const renderHearthIcon = () => (
    <IconWrapper onClick={handleClickBookmark}>
      {isWishClub ? <LoveFilled strokeColor="#FF7900" /> : <LoveOutlineOpacityApplied />}
    </IconWrapper>
  );

  const renderIsFullLayer = () => {
    return (
      <DimLayer>
        <LayerTextWrap>
          <LayerText>꽉 찼어요!</LayerText>
        </LayerTextWrap>
      </DimLayer>
    );
  };
  const renderWillOpenLayer = () => {
    return (
      <DimLayer>
        <FlexWrap>
          <DarkLayerTextBox>
            찜하고 오픈 알림 받기 <RightChevron />
          </DarkLayerTextBox>
          <DarkLayerTextBottomText>
            {format(Date.parse(openedAt as string), 'M/d(EEE) HH:mm', { locale: ko })} 오픈 예정
          </DarkLayerTextBottomText>
        </FlexWrap>
      </DimLayer>
    );
  };
  return (
    <DisplayCard
      style={{ width: cardWidth, maxWidth: '225px', cursor: 'pointer' }}
      hero={
        <DisplayCardHero>
          <ImageWindow style={{ height: imgHeight }}>
            {renderHearthIcon()}
            {isFullClub && renderIsFullLayer()}
            {openingReservation && renderWillOpenLayer()}
            <Image src={coverUrl as string} alt="이미지" />
          </ImageWindow>
        </DisplayCardHero>
      }
      onClick={onClickClubCard}
    >
      <DisplayCardContent>
        <div>
          {badgeText && (
            <Badge variant="filled" backgroundColor={badgeColor}>
              {badgeText}
            </Badge>
          )}
        </div>
        <DisplayCardTitle style={{ marginTop: titleMarginTopPx }}>{name}</DisplayCardTitle>
        <DisplayCardSubTitle>{leaderTitle}</DisplayCardSubTitle>
        <DisplayCardParagraph style={{ display: 'block' }}>{desc}</DisplayCardParagraph>
        <DisplayCardPlaceInfo>{place?.name}</DisplayCardPlaceInfo>
        {meetings && <DisplayCardMeetingInfo>{`첫 모임 ${firstMeeting} ${meetingStartedAt}`}</DisplayCardMeetingInfo>}
      </DisplayCardContent>
    </DisplayCard>
  );
};

const ImageWindow = styled.div`
  position: relative;
  width: 100%;
  max-height: 203px;
`;
const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 2;
`;

const DimLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background: ${({ theme }) => theme.colors.overlay50};
  z-index: 1;
`;
const LayerTextWrap = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const LayerText = styled.p`
  ${heading9};
  color: ${({ theme }) => theme.colors.white};
`;
const FlexWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
const DarkLayerTextBox = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 7px 0 7px 5px;
  text-align: left;
  display: flex;
  align-items: center;
  ${title6};
`;

const DarkLayerTextBottomText = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${title6};
`;

export default NewCurationClubCard;
