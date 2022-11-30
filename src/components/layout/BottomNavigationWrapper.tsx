import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  HomeFilledIcon,
  HomeOutlinedIcon,
  LoveFilledIcon,
  LoveOutlinedIcon, MenuFilledIcon,
  MenuIcon,
  MyFilledIcon,
  MyOutlinedIcon,
} from '@trevari/icons';
import { BottomNavigation, BottomNavigationItem } from '@trevari/business-components';

import { endpoints } from 'config';
import ga from 'pages/main/ga';

const bottomNavs = [
  {
    icon: <HomeOutlinedIcon width={24} height={24} />,
    activeIcon: <HomeFilledIcon width={24} height={24} />,
    label: '홈',
    to: '/',
  },
  {
    icon: <MenuIcon width={24} height={24} color={'#6E6E6C'} />,
    activeIcon: <MenuFilledIcon width={24} height={24} color={'#000'} />,
    label: '메뉴',
    to: '/menu',
  },
  {
    icon: <LoveOutlinedIcon width={24} height={24} color={'#6E6E6C'} />,
    activeIcon: <LoveFilledIcon width={24} height={24} />,
    label: '찜',
    to: '/wishList',
  },
  {
    icon: <MyOutlinedIcon width={24} height={24} />,
    activeIcon: <MyFilledIcon width={24} height={24} />,
    label: '마이페이지',
    to: `${endpoints.user_page_url}/mypage`,
  },
];

const BottomNavigationWrapper = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleRedirect = (to: string, name: string) => {
    const gaCategory = pathname === '/' ? '메인 페이지' : pathname === '/menu' ? '메뉴 페이지' : '';
    if (to === '/menu') {
      navigate('/menu');
    }
    !!gaCategory && ga.event({ category: gaCategory, action: '하단 네비게이션 클릭', label: name });
    return (window.location.href = to);
  };

  return (
    <BottomNavigation>
      {bottomNavs.map(bottomItem => {
        const { icon, activeIcon, label, to } = bottomItem;
        const isActive = pathname === to;
        return (
          <BottomNavigationItem
            key={label}
            icon={icon}
            activeIcon={activeIcon}
            label={label}
            onClick={() => handleRedirect(to, label)}
            isActive={isActive}
          />
        );
      })}
    </BottomNavigation>
  );
};

export default BottomNavigationWrapper;
