import styled from '@emotion/styled';
import { heading8 } from '@trevari/typo';

export const MenuContainer = styled.div`
  height: 100vh;
  padding: 72px 0 0 0;
  box-sizing: border-box;
`;
export const MenuItemAnchor = styled.a`
  display: block;  
  width: 100%;
  padding: 12px 20px;
  cursor: pointer;
  color: black;
  box-sizing: border-box;
  :hover, :visited {
    background: ${({theme}) => theme.colors.gray200}
  }
`;
export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;  
  ${heading8};
`;
export const BadgeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 6px;
`;
