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
import { format } from 'date-fns';
import ko from 'date-fns/locale/ko';
import { useState } from 'react';
import { IClub } from '../services/main.types';
import { confirmAuth, selectUserId } from 'services/auth/auth.store';
import { useAppDispatch, useAppSelector } from 'services/store';
import { createWishClub, deleteWishClub } from 'pages/main/services/main.api';
import { selectWishClubIds } from 'pages/main/services/main.store';
import ga from 'pages/main/ga';
import { toastAlert } from 'services/ui.store';
import { selectUser } from 'services/user/user.store';
import { updateUser } from 'services/user/user.api';
import { clubStatus } from 'utils/club';
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
  const { id, name, description, leaderTitle, coverUrl, place, meetings, seasonID, isBookmark } = club;
  const dispatch = useAppDispatch();
  const [isCheckedBookmark, setCheckBookmark] = useState<boolean>(isBookmark);
  const selectedUserId = useAppSelector(selectUserId);
  const wishClubs = useAppSelector(selectWishClubIds);
  const { isAgreedToAllMarketing } = useAppSelector(selectUser);
  const [isAgreedToReceiveMarketingInfo, setAgreedToReceiveMarketingInfo] = useState(isAgreedToAllMarketing);

  const handleClickBookmark = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setCheckBookmark(state => !state);
    dispatch(confirmAuth());
    if (wishClubs.includes(id)) {
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

  const firstMeeting = format(Date.parse(meetings[0].startedAt), 'M/d(EEE)', {
    locale: ko,
  });
  const meetingStartedAt = format(Date.parse(meetings[0].startedAt), 'HH:mm', {
    locale: ko,
  });

  const badgeText = clubStatus(club);
  const badgeColor = badgeText === 'NEW' ? '#1371FF' : 'black';

  const renderHearthIcon = () => (
    <IconWrapper onClick={handleClickBookmark}>
      {isCheckedBookmark ? (
        <LoveFilled strokeColor="#FF7900" />
      ) : (
        <LoveFilled color="transparent" strokeColor="white" />
      )}
    </IconWrapper>
  );
  return (
    <DisplayCard
      style={{ width: cardWidth, maxWidth: '225px' }}
      hero={
        <DisplayCardHero>
          <ImageWindow style={{ height: imgHeight }}>
            {renderHearthIcon()}
            <Image src={coverUrl as string} alt="이미지" />
          </ImageWindow>
        </DisplayCardHero>
      }
    >
      <DisplayCardContent>
        <div>
          {badgeText && (
            <Badge variant="filled" backgroundColor={badgeColor}>
              {badgeText}
            </Badge>
          )}
        </div>
        <DisplayCardTitle>{name}</DisplayCardTitle>
        <DisplayCardSubTitle>{leaderTitle}</DisplayCardSubTitle>
        <DisplayCardParagraph>{description}</DisplayCardParagraph>
        <DisplayCardPlaceInfo>{place?.name}</DisplayCardPlaceInfo>
        <DisplayCardMeetingInfo>{`첫 모임 ${firstMeeting} ${meetingStartedAt}`}</DisplayCardMeetingInfo>
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
  z-index: 1000;
`;
export default NewCurationClubCard;
