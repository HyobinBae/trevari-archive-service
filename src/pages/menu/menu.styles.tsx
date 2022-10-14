import styled from '@emotion/styled';
import { heading8 } from '@trevari/typo';

export const MenuContainer = styled.div`
  height: 100vh;
  padding: 80px 20px 333px 20px;
`;
export const MenuItemAnchor = styled.a`
  cursor: pointer;
`;
export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${heading8};
  margin-bottom: 24px;
`;
export const BadgeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 6px;
`;
