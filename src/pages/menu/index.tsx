import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';
import { Badge } from '@trevari/components';

import Box from 'components/base/Box';
import {
  BadgeWrap,
  ChildDiv, ChildDivWrapper,
  MenuContainer,
  MenuItem,
  MenuItemAnchor, MenuItemAnchorNotHover, MenuItemNotHover,
  MenuItemSub,
  NotiBadgeDiv,
} from 'pages/menu/menu.styles';
import { selectHasPartnerMembership } from 'services/user/user.store';
import { endpoints } from 'config';
import { goToPage } from 'utils';
import ga from 'pages/main/ga';
import NotiBadge from '../../components/svgs/NotiBadge';
import Plus from '../../components/svgs/Plus';
import Minus from '../../components/svgs/Minus';

const Menu = () => {
  const {
    colors: { orange900, white },
  } = useTheme();
  const [isMoreChild, setIsMoreChild] = useState(true);
  const hasPartnerMembership = useSelector(selectHasPartnerMembership);

  const menuItemClickAction = (url: string, name: string) => {
    ga.event({ category: '메뉴 페이지', action: '버튼 클릭', label: name });
    goToPage(url);
  };

  const moreOnClickAction = () => {
    setIsMoreChild(!isMoreChild);
  };

  const menuItems = [
    {
      title: '클럽',
      onClick: () => menuItemClickAction(`${endpoints.user_page_url}/apply`, '모든 클럽 보기'),
      badge:(
        <NotiBadgeDiv>
          <NotiBadge />
        </NotiBadgeDiv>
      ),
      more: (
        <div onClick={moreOnClickAction}>
          {isMoreChild ? <Plus /> : <Minus />}
        </div>
      ),
      moreOnClick: () => menuItemClickAction(`${endpoints.user_page_url}/apply`, '모든 클럽 보기'),
      child: (
        <ChildDivWrapper>
          <ChildDiv onClick={() => goToPage(`${endpoints.user_page_url}/apply`)}>
            모든 클럽 보기
          </ChildDiv>
          <ChildDiv onClick={() => goToPage(`${endpoints.user_page_url}/apply?typeFilter=%ED%95%A8%EA%BB%98%20%EB%A7%8C%EB%93%9C%EB%8A%94%20%ED%81%B4%EB%9F%BD`)}>
            함께 만드는 클럽
          </ChildDiv>
          <ChildDiv onClick={() => goToPage(`${endpoints.user_page_url}/apply?typeFilter=%ED%81%B4%EB%9F%BD%EC%9E%A5%20%EC%9E%88%EB%8A%94%20%ED%81%B4%EB%9F%BD`)}>
            클럽장 있는 클럽
          </ChildDiv>
          <ChildDiv onClick={() => goToPage(`${endpoints.user_page_url}/onlineclubs`)}>
            클럽장 구독 클럽
          </ChildDiv>
        </ChildDivWrapper>
      )
    },
    {
      title: '커뮤니티 이벤트',
      onClick: () => menuItemClickAction(`${endpoints.user_page_url}/events`, '커뮤니티 이벤트'),
      badge: null,
    },
    {
      title: '다른 클럽 놀러가기',
      onClick: () => menuItemClickAction(`${endpoints.user_page_url}/meetings`, '다른 클럽 놀러가기'),
      badge: (
        <BadgeWrap>
          <Badge variant="filled" size="small" backgroundColor={orange900} color={white}>
            멤버 Only
          </Badge>
        </BadgeWrap>
      ),
    },
    {
      title: hasPartnerMembership ? '파트너 어드민' : '파트너 지원하기',
      onClick: () =>
        menuItemClickAction(
          hasPartnerMembership
            ? 'https://partners.trevari.co.kr/'
            : 'https://trevari.co.kr/blog/show?id=40ef561e-9b31-4a40-882b-02c83cc194c4',
          hasPartnerMembership ? '파트너 어드민' : '파트너 지원하기',
        ),
      badge: (
        <BadgeWrap>
          <Badge variant="filled" size="small" backgroundColor={orange900} color={white}>
            멤버 Only
          </Badge>
        </BadgeWrap>
      ),
    },
    {
      title: '굿즈',
      onClick: () => menuItemClickAction('/goods', '슈퍼마켙'),
      badge: null,
    },
    {
      title: '매거진',
      onClick: () => menuItemClickAction(`${endpoints.user_page_url}/blog`, '블로그'),
      badge: null,
    },
  ];

  return (
    <Box style={{ paddingTop: '48px' }}>
      <MenuContainer>
        {menuItems.map(({ title, onClick, badge, more, child }) => {
          return title === '클럽' ? (
            <MenuItemAnchorNotHover key={title} >
              <MenuItemNotHover>
                <MenuItemSub onClick={onClick}>
                  {title}
                  {badge}
                </MenuItemSub>
                <div>
                  {more}
                </div>
              </MenuItemNotHover>
              {isMoreChild && child}
            </MenuItemAnchorNotHover>
          ) : (
            <MenuItemAnchor key={title} onClick={onClick}>
              <MenuItem>
                {title}
                {badge}
              </MenuItem>
            </MenuItemAnchor>
          );
        })}
      </MenuContainer>
    </Box>
  );
};

export default Menu;

