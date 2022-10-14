import { Badge } from '@trevari/components';
import React from 'react';
import { BadgeWrap, MenuContainer, MenuItem, MenuItemAnchor } from 'pages/menu/menu.styles';
import { useSelector } from 'react-redux';
import { selectHasPartnerMembership } from 'services/user/user.store';
import { useTheme } from '@emotion/react';
import { endpoints } from 'config';

const Menu = () => {
  const {
    colors: { orange900, green900, white },
  } = useTheme();
  const hasPartnerMembership = useSelector(selectHasPartnerMembership);

  const goToPage = (url: string) => {
    window.location.href = url;
  };

  return (
    <MenuContainer>
      <MenuItemAnchor onClick={() => goToPage('/apply')}>
        <MenuItem>모든 클럽 보기</MenuItem>
      </MenuItemAnchor>
      <MenuItemAnchor onClick={() => goToPage('/events')}>
        <MenuItem>커뮤니티 이벤트</MenuItem>
      </MenuItemAnchor>
      <MenuItemAnchor onClick={() => goToPage('/meetings')}>
        <MenuItem>
          다른 클럽 놀러가기
          <BadgeWrap>
            <Badge variant="filled" size="small" backgroundColor={orange900} color={white}>
              멤버 Only
            </Badge>
          </BadgeWrap>
        </MenuItem>
      </MenuItemAnchor>
      <MenuItemAnchor
        onClick={() =>
          goToPage(
            hasPartnerMembership
              ? 'https://partners.trevari.co.kr/'
              : 'https://trevari.co.kr/blog/show?id=40ef561e-9b31-4a40-882b-02c83cc194c4',
          )
        }
      >
        <MenuItem>
          {hasPartnerMembership ? '파트너 어드민' : '파트너 지원하기'}
          <BadgeWrap>
            <Badge variant="filled" size="small" backgroundColor={orange900} color={white}>
              멤버 Only
            </Badge>
          </BadgeWrap>
        </MenuItem>
      </MenuItemAnchor>
      <MenuItemAnchor onClick={() => goToPage('/goods')}>
        <MenuItem>
          슈퍼마켓
          <BadgeWrap>
            <Badge variant="filled" size="small" backgroundColor={green900} color={white}>
              NEW
            </Badge>
          </BadgeWrap>
        </MenuItem>
      </MenuItemAnchor>
      <MenuItemAnchor onClick={() => goToPage(`${endpoints.user_page_url}/blog`)}>
        <MenuItem>블로그</MenuItem>
      </MenuItemAnchor>
    </MenuContainer>
  );
};

export default Menu;
