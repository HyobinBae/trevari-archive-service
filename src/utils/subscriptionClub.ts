export const formatOnlineClubsSchedule = (
  weekOfSchedule: number,
  dayOfSchedule: number,
  timeOfSchedule: string,
  hasTime = true,
  isKoreanFormat = false,
): string => {
  if (!weekOfSchedule || !dayOfSchedule || !timeOfSchedule) {
    return '';
  }

  const week: string[] = ['첫', '두', '세', '네', '다섯'];
  const days: string[] = ['일', '월', '화', '수', '목', '금', '토'];

  let weekString = week[weekOfSchedule - 1];
  if (weekOfSchedule === 0) {
    weekString = '?';
  }

  let result: string;
  if (isKoreanFormat) {
    result = '매달 ' + weekString + ' 번째 ' + days[dayOfSchedule - 1] + '요일';
    if (hasTime) {
      result += ' ' + timeOfSchedule.split(':')[0] + '시 ' + timeOfSchedule.split(':')[1] + '분';
    }
  } else {
    result = '매달 ' + weekString + ' 번째 ' + days[dayOfSchedule - 1] + '요일';
    if (hasTime) {
      result += ' ' + timeOfSchedule.split(':')[0] + ':' + timeOfSchedule.split(':')[1];
    }
  }

  return result;
};