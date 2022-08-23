import React from 'react';
import Home from 'svgs/Home';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { body8 } from '@trevari/typo';

const bottomNavs = [
  {
    icon: <Home />,
    name: '홈',
    to: '/',
  },
  {
    icon: <Home />,
    name: '메뉴',
    to: '/',
  },
  {
    icon: <Home />,
    name: '찜',
    to: '/',
  },
  {
    icon: <Home />,
    name: '마이페이지',
    to: '/',
  },
];

const BottomNavigation = () => {
  return (
    <Base>
      <FixedWrapper>
        {bottomNavs.map(bottomItem => {
          const { icon, name, to } = bottomItem;
          return (
            <Item key={name} to={to}>
              <>{icon}</>
              <NavName>{name}</NavName>
            </Item>
          );
        })}
      </FixedWrapper>
    </Base>
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
  width: 500px;

  border-top: 1px solid ${({ theme }) => theme.colors.gray300};
`;

const Item = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  padding: 7px 0 5px;
`;

const NavName = styled.span`
  ${body8}
`;
