import { isBefore } from 'date-fns';
import { Club } from 'types/__generate__/user-backend-api';

export const clubStatus = (club: Club) => {
  const { memberCount, maxMemberCount, applicationDeadline, isManyBookmarked, openedAt } = club;
  const isFullClub = memberCount >= maxMemberCount;
  const sessionClubTypes = ['라이브 세션 클럽', '비디오 세션 클럽', '몰아보기 세션 클럽'];
  const isMostFullClub =
    !isFullClub && sessionClubTypes.includes(club.type)
      ? 100 * (club.memberCount / club.maxMemberCount) >= 60
      : club.memberCount >= 10;

  const isOverApplicationDeadline = applicationDeadline ? isBefore(applicationDeadline, new Date()) : false;

  const today = moment().format('YYYY-MM-DD HH:mm');
  const openDate = moment(openedAt).format('YYYY-MM-DD HH:mm');
  const sevenDaysAfterOpenDate = moment(openDate).add(7, 'days').format('YYYY-MM-DD HH:mm');
  const isNewOpenedClub = openDate < today && today < sevenDaysAfterOpenDate;

  if (isMostFullClub && !isFullClub && !isOverApplicationDeadline) {
    return '마감임박';
  } else if (isNewOpenedClub) {
    return 'NEW';
  }
  if (isManyBookmarked) {
    return '찜많아요';
  }
};
