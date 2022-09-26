import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Alarm from 'components/svgs/Alarm';
import AlarmOn from 'components/svgs/AlarmOn';
import { useMobileDetect } from 'hooks/useDetectMobile';
import { postMessage } from 'utils/postMessage';

const AlarmButton = () => {
  const [hasNewAlarm, setHasNewAlarm] = useState(false);
  const isApp = useMobileDetect().isApp();

  useEffect(() => {
    setHasNewAlarm(window.localStorage.getItem('unreadNoti') === 'true');
  }, []);

  const onClickAlarm = () => {
    postMessage('TrevariFlutterAppForNotifications', 'true');
  };

  if (!isApp) return <BarInstance></BarInstance>;

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
