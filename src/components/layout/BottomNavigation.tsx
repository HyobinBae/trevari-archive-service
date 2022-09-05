import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { MenuIcon } from '@trevari/icons';
import { body8 } from '@trevari/typo';

import HomeFilled from 'svgs/HomeFilled';
import LoveOutline from 'svgs/LoveOutline';
import LoveFilled from 'svgs/LoveFilled';
import HomeOutline from 'svgs/HomeOutline';
import MyFilled from 'svgs/MyFilled';
import MyOutline from 'svgs/MyOutline';

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
    to: '/menu',
  },
  {
    icon: <LoveOutline />,
    activeIcon: <LoveFilled />,
    name: '찜',
    to: '/wish',
  },
  {
    icon: <MyOutline />,
    activeIcon: <MyFilled />,
    name: '마이페이지',
    to: '/my',
  },
];

const BottomNavigation = () => {
  const { pathname } = useLocation();

  return (
    <FixedWrapper>
      {bottomNavs.map(bottomItem => {
        const { icon, activeIcon, name, to } = bottomItem;
        const isActive = pathname === to;
        return (
          <Item key={name} to={to}>
            <>{isActive ? activeIcon : icon}</>
            <NavName active={isActive}>{name}</NavName>
          </Item>
        );
      })}
    </FixedWrapper>
  );
};

export default BottomNavigation;

const Base = styled.div`
  position: absolute;
  z-index: 100;
  bottom: 0;
  width: 100%;

  height: 56px;
  background: #fff;
`;

const FixedWrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  bottom: 0;
  background: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.gray300};
`;

const Item = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  padding: 7px 0 5px;
`;

const NavName = styled.span<{ active: boolean }>`
  ${body8};
  color: ${({ active, theme }) => (active ? theme.colors.black : theme.colors.gray700)};
`;
