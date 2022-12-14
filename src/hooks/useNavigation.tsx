import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BetaBadge from '../components/svgs/BetaBadge';
import styled from '@emotion/styled';

export const useNavigation = () => {
  const location = useLocation();
  const { pathname } = location;

  const needNotificationButtonPageList = ['/', '/menu', '/wishList', '/bookreviews'];
  const [title, setTitle] = useState<string | null>(null);
  const [navigation, setNavigation] = useState<{
    path: string;
    showBackButton: boolean;
    showNotification: boolean;
  }>({
    path: pathname,
    showBackButton: false,
    showNotification: false,
  });

  useEffect(() => {
    setNavigation({
      path: pathname,
      showBackButton: !title,
      showNotification: needNotificationButtonPageList.includes(pathname),
    });
    setTitle(getTitle);
  }, [location, title]);

  const getTitle = () => {
    if (navigation.path === '/') {
      return '홈';
    } else if (navigation.path === '/menu') {
      return '메뉴';
    } else if (navigation.path === '/wishList') {
      return '찜 리스트';
    } else if (navigation.path === '/bookreviews') {
      return (
        <TitleWrapper>
          <TitleSpan>독후감</TitleSpan>
          <BetaBadge />
        </TitleWrapper>
      );
    } else {
      return null;
    }
  };

  return { ...navigation, title };
};

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const TitleSpan = styled.div`
  margin-right: 4px;
`;
