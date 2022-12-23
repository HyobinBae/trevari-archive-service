import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useNavigation = () => {
  const location = useLocation();
  const { pathname } = location;

  const needNotificationButtonPageList = ['/', '/menu', '/wishList', '/bookreviews'];
  const [navigation, setNavigation] = useState<{
    path: string;
    showBackButton: boolean;
    showNotification: boolean;
    title: string | null;
  }>({
    path: pathname,
    showBackButton: false,
    showNotification: false,
    title: null,
  });

  useEffect(() => {
    const title = getTitle(pathname);
    setNavigation({
      path: pathname,
      showBackButton: !title,
      showNotification: needNotificationButtonPageList.includes(pathname),
      title,
    });
  }, [location]);

  const getTitle = (pathname: string) => {
    if (pathname === '/') {
      return '홈';
    } else if (pathname === '/menu') {
      return '메뉴';
    } else if (pathname === '/wishList') {
      return '찜 리스트';
    } else if (pathname === '/bookreviews') {
      return '독후감';
    } else {
      return null;
    }
  };

  return { ...navigation };
};
