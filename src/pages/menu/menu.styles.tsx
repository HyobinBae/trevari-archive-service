import styled from '@emotion/styled';
import { body4, heading8 } from '@trevari/typo';

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

export const MenuItemAnchorNotHover = styled.a`
  display: block;  
  width: 100%;
  cursor: pointer;
  color: black;
  box-sizing: border-box;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;    
  ${heading8};
`;

export const MenuItemNotHover = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;  
  ${heading8};
  padding: 12px 20px;
`;

export const MenuItemSub = styled.div`
  display: flex;
`;

export const BadgeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 6px;
`;
export const NotiBadgeDiv = styled.div`
  display: flex;
  align-self: flex-start;
  margin-left: 2px;
`;

export const ChildDivWrapper = styled.div`
`;

export const ChildDiv = styled.div`
  :hover, :visited {
    background: ${({theme}) => theme.colors.gray200}
  };
  padding: 12px 20px;
  ${body4};
  color: ${({theme}) => theme.colors.gray700};
`;
