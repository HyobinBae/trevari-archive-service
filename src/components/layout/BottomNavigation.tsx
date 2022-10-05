import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { MenuIcon } from '@trevari/icons';
import { body8 } from '@trevari/typo';

import HomeFilled from 'components/svgs/HomeFilled';
import LoveOutline from 'components/svgs/LoveOutline';
import LoveFilled from 'components/svgs/LoveFilled';
import HomeOutline from 'components/svgs/HomeOutline';
import MyFilled from 'components/svgs/MyFilled';
import MyOutline from 'components/svgs/MyOutline';
import { endpoints } from 'config';
import ga from 'pages/main/ga';

const bottomNavs = [
  {
    icon: <HomeOutline />,
    activeIcon: <HomeFilled />,
    name: '홈',
    to: '/',
  },
  {
    icon: <MenuIcon width={24} height={24} color={'#6E6E6C'} />,
    activeIcon: <MenuIcon width={24} height={24} color={'#000'} />,
    name: '메뉴',
    to: `${endpoints.user_page_url}/menu`,
  },
  {
    icon: <LoveOutline color={'#6E6E6C'} />,
    activeIcon: <LoveFilled />,
    name: '찜',
    to: `${endpoints.user_page_url}/wishList`,
  },
  {
    icon: <MyOutline />,
    activeIcon: <MyFilled />,
    name: '마이페이지',
    to: `${endpoints.user_page_url}/mypage`,
  },
];

const BottomNavigation = () => {
  const { pathname } = useLocation();

  const handleRedirect = (to: string, name: string) => {
    ga.event({ category: '하단 네비게이션', action: name, label: name });
    return (window.location.href = to);
  };

  return (
    <Wrapper>
      {bottomNavs.map(bottomItem => {
        const { icon, activeIcon, name, to } = bottomItem;
        const isActive = pathname === to;
        return (
          <Item key={name} onClick={() => handleRedirect(to, name)}>
            <>{isActive ? activeIcon : icon}</>
            <NavName active={isActive}>{name}</NavName>
          </Item>
        );
      })}
    </Wrapper>
  );
};

export default BottomNavigation;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 10;
  display: flex;
  max-width: 500px;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.gray300};
  padding: 7px 0 calc(constant(safe-area-inset-bottom) + 5px);
  padding: 7px 0 calc(env(safe-area-inset-bottom) + 5px);
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  padding: 7px 0 5px;
  cursor: pointer;
`;

const NavName = styled.span<{ active: boolean }>`
  ${body8};
  color: ${({ active, theme }) => (active ? theme.colors.black : theme.colors.gray700)};
`;
