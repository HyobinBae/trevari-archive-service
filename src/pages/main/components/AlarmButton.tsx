import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Alarm from 'components/svgs/Alarm';
import AlarmOn from 'components/svgs/AlarmOn';
import { useMobileDetect } from 'hooks/useDetectMobile';
import { postMessage } from 'utils/postMessage';
import { useAppSelector } from '../../../services/store';
import { selectAuthenticated } from '../../../services/auth/auth.store';

interface IEvent {
  detail: {
    hasNewNotification: boolean;
  };
}

const AlarmButton = () => {
  const [hasNewAlarm, setHasNewAlarm] = useState(false);
  const isApp = useMobileDetect().isApp();
  const authenticated = useAppSelector(selectAuthenticated);

  useEffect(() => {
    if (isApp) {
      setHasNewAlarm(window.localStorage.getItem('unreadNoti') === 'true');
      window.addEventListener('customEventForRefreshNotificationIcon', refreshNotificationIcon);
    }
    return () => {
      if (!isApp) return;
      return window.removeEventListener('customEventForRefreshNotificationIcon', refreshNotificationIcon);
    };
  }, []);

  const refreshNotificationIcon = (event: IEvent) => {
    setHasNewAlarm(event.detail.hasNewNotification);
  };

  const onClickAlarm = () => {
    postMessage('TrevariFlutterAppForNotifications', 'true');
  };

  if (!isApp || !authenticated) return <BarInstance></BarInstance>;

  if (hasNewAlarm)
    return (
      <BarInstance onClick={onClickAlarm}>
        <AlarmOn />
      </BarInstance>
    );

  return (
    <BarInstance onClick={onClickAlarm}>
      <Alarm />
    </BarInstance>
  );
};

const BarInstance = styled.div`
  display: flex;
  align-items: center;
`;
export default AlarmButton;
