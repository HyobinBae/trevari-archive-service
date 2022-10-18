import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';
import { Badge } from '@trevari/components';

import Box from 'components/base/Box';
import { BadgeWrap, MenuContainer, MenuItem, MenuItemAnchor } from 'pages/menu/menu.styles';
import { selectHasPartnerMembership } from 'services/user/user.store';
import { endpoints } from 'config';

const Menu = () => {
  const {
    colors: { orange900, green900, white },
  } = useTheme();
  const hasPartnerMembership = useSelector(selectHasPartnerMembership);

  const goToPage = (url: string) => {
    window.location.href = url;
  };

  const menuItems = [
    {
      title: '모든 클럽 보기',
      onClick: () => goToPage('/apply'),
      badge: null,
    },
    {
      title: '커뮤니티 이벤트',
      onClick: () => goToPage('/apply'),
      badge: null,
    },
    {
      title: '다른 클럽 놀러가기',
      onClick: () => goToPage('/meetings'),
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
        goToPage(
          hasPartnerMembership
            ? 'https://partners.trevari.co.kr/'
            : 'https://trevari.co.kr/blog/show?id=40ef561e-9b31-4a40-882b-02c83cc194c4',
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
      title: '슈퍼마켓',
      onClick: () => goToPage('/goods'),
      badge: (
        <BadgeWrap>
          <Badge variant="filled" size="small" backgroundColor={green900} color={white}>
            NEW
          </Badge>
        </BadgeWrap>
      ),
    },
    {
      title: '블로그',
      onClick: () => goToPage(`${endpoints.user_page_url}/blog`),
      badge: null,
    },
  ];
  return (
    <Box style={{ paddingTop: '48px' }}>
      <MenuContainer>
        {menuItems.map(({ title, onClick, badge }) => {
          return (
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
