import { isBefore, format, add } from 'date-fns';
import { Club } from 'types/__generate__/user-backend-api';

interface IObject {
  [key: string]: {
    name: string;
    type: string;
    color: string;
  };
}
export const OPTION_BADGE: IObject = {
  온라인: {
    name: '온라인',
    type: 'filled',
    color: '#1371FF',
  },
};

export const STATUS_BADGE: IObject = {
  마감임박: {
    name: '마감임박',
    type: 'filled',
    color: '#000000',
  },
  NEW: {
    name: 'NEW',
    type: 'filled',
    color: '#F3007F',
  },
};

export const clubStatus = (club: Club) => {
  const { memberCount, maxMemberCount, applicationDeadline, openedAt } = club;
  if (!openedAt) return ''
  const isFullClub = memberCount >= maxMemberCount;
  const sessionClubTypes = ['라이브 세션 클럽', '비디오 세션 클럽', '몰아보기 세션 클럽'];
  const isMostFullClub =
    !isFullClub && sessionClubTypes.includes(club.type)
      ? 100 * (club.memberCount / club.maxMemberCount) >= 60
      : club.memberCount >= 10;

  const isOverApplicationDeadline = applicationDeadline ? isBefore(Date.parse(applicationDeadline), new Date()) : false;

  const today = format(new Date(), 'yyyy-MM-dd HH:mm');
  const openDate = format(Date.parse(openedAt as string), 'yyyy-MM-dd HH:mm');
  const sevenDaysAfterOpenDate = format(add(Date.parse(openedAt as string), { days: 7 }), 'yyyy-MM-dd HH:mm');
  const isNewOpenedClub = openDate < today && today < sevenDaysAfterOpenDate;

  if (isMostFullClub && !isFullClub && !isOverApplicationDeadline) {
    return '마감임박';
  } else if (isNewOpenedClub) {
    return 'NEW';
  }
};
