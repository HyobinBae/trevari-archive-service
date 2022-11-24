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
import { endpoints } from 'config';
import { format } from 'date-fns';
import ko from 'date-fns/locale/ko';
import { useNavigation } from 'hooks/useNavigation';
import { goToPage } from 'utils';
import ga from '../ga';

import { IEvent } from '../services/main.types';

interface NewCurationClubCardProps {
  event: IEvent;
  cardWidth?: string;
  imgHeight?: string;
}

const NewCurationEventCard = ({ event, cardWidth = '152px', imgHeight = '138px' }: NewCurationClubCardProps) => {
  const { id, name, description, thumbnailUrl, place, startedAt, hostName, memberCount, maxMemberCount } = event;
  const meetingDate = startedAt
    ? format(Date.parse(startedAt), 'M/d(EEE)', {
        locale: ko,
      })
    : '';
  const meetingStartedAt = startedAt
    ? format(Date.parse(startedAt), 'HH:mm', {
        locale: ko,
      })
    : '';

  const badgeText = maxMemberCount && memberCount && maxMemberCount * 0.7 <= memberCount ? '마감 임박' : '';
  const titleMarginTopPx = badgeText ? '6px' : '0px';
  const onClickEventCard = () => {
    const { title } = useNavigation();
    const category = title === '홈' ? '메인 페이지' : '큐레이션 페이지';
    ga.event({ category, action: `이벤트 카드 클릭`, label: `${name}^${id}` });
    goToPage(`${endpoints.user_page_url}/events/show?eventID=${id}`);
  };
  return (
    <DisplayCard
      style={{ width: cardWidth, maxWidth: '225px', cursor: 'pointer' }}
      hero={
        <DisplayCardHero>
          <ImageWindow style={{ height: imgHeight }}>
            <Image src={thumbnailUrl as string} alt="이미지" />
          </ImageWindow>
        </DisplayCardHero>
      }
      onClick={onClickEventCard}
    >
      <DisplayCardContent>
        <div>{badgeText && <Badge variant="filled">{badgeText}</Badge>}</div>
        <DisplayCardTitle style={{ marginTop: titleMarginTopPx }}>{name}</DisplayCardTitle>
        <DisplayCardSubTitle>{hostName}</DisplayCardSubTitle>
        <DisplayCardParagraph style={{ display: 'block' }}>{description}</DisplayCardParagraph>
        <DisplayCardPlaceInfo>{place?.name}</DisplayCardPlaceInfo>
        <DisplayCardMeetingInfo>
          {meetingDate} {meetingStartedAt}
        </DisplayCardMeetingInfo>
      </DisplayCardContent>
    </DisplayCard>
  );
};

const ImageWindow = styled.div`
  position: relative;
  width: 100%;
  height: calc((50vw - 25px) * 0.9);
  max-height: 203px;
`;
const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export default NewCurationEventCard;
