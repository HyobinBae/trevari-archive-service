import { format, formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

export const formatRelativeTime = (date: string) => {
  const now = Date.now();
  const targetDate = new Date(date);

  const diff = (now - targetDate.getTime()) / 1000; // 현재 시간과의 차이(초)
  if (diff < 60 * 1) {
    return '방금 전';
  }
  if (diff < 60 * 60 * 24 * 3) {
    return formatDistanceToNow(targetDate, { addSuffix: true, locale: ko }).replace('약 ', '');
  }
  return format(targetDate, 'PPP EEE p', { locale: ko });
};
