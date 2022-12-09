import styled from '@emotion/styled';
import {
  DisplayCard,
  DisplayCardContent,
  DisplayCardHero,
  DisplayCardMeetingInfo,
  DisplayCardPlaceInfo,
  DisplayCardTitle,
} from '@trevari/business-components';
import {endpoints} from 'config';
import {useNavigation} from 'hooks/useNavigation';
import {goToPage} from 'utils';
import ga from '../ga';

import {ISubscriptionClub} from '../services/main.types';
import {formatOnlineClubsSchedule} from "../../../utils/subscriptionClub";

interface NewCurationClubCardProps {
  subscriptionClub: ISubscriptionClub;
  cardWidth?: string;
  imgHeight?: string;
}

const NewCurationSubscriptionClubCard = ({ subscriptionClub, cardWidth = '152px', imgHeight = '138px' }: NewCurationClubCardProps) => {
  const { id, content, liveSchedule } = subscriptionClub;
  const name = subscriptionClub.title;
  const place = '온라인(Youtube)';
  const schedule = formatOnlineClubsSchedule(liveSchedule.weekOfLiveSchedule, liveSchedule.dayOfLiveSchedule, liveSchedule.startTimeOfLiveSchedule);

  const { title } = useNavigation();

  const onClickEventCard = () => {
    const category = title === '홈' ? '메인 페이지' : '큐레이션 페이지';
    ga.event({ category, action: `온라인 구독 클럽 카드 클릭`, label: `${name}^${id}` });
    goToPage(`${endpoints.user_page_url}/onlineclubs/club?id=${id}`);
  };

  return (
    <DisplayCard
      style={{ width: cardWidth, maxWidth: '225px', cursor: 'pointer' }}
      hero={
        <DisplayCardHero>
          <ImageWindow style={{ height: imgHeight }}>
            <Image src={`https://image.trevari.co.kr/static/${content.detailPageTitleImageUrl as string}`} alt="이미지" />
          </ImageWindow>
        </DisplayCardHero>
      }
      onClick={onClickEventCard}
    >
      <DisplayCardContent>
        <DisplayCardTitle>{name}</DisplayCardTitle>
        <DisplayCardPlaceInfo>{place}</DisplayCardPlaceInfo>
        <DisplayCardMeetingInfo>{schedule}</DisplayCardMeetingInfo>
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

export default NewCurationSubscriptionClubCard;
