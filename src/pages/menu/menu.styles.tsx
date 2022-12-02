import styled from '@emotion/styled';
import { body4, heading8 } from '@trevari/typo';
import { useMobileDetect } from '../../hooks/useDetectMobile';

const mobileDetect = useMobileDetect();

export const MenuContainer = styled.div`
  height: ${() => mobileDetect.isApp() ? 'initial' : '100vh'};
  padding: 40px 0 0 0;
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
    background: ${({theme}) => mobileDetect.isMobile() ? 'initial' : theme.colors.gray200};
  }
  :active {
    background: ${({theme}) => theme.colors.gray200};
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

export const ChildDivWrapper = styled.div`
  background: ${({theme}) => theme.colors.gray100}
`;

export const ChildDiv = styled.div`
 :hover, :visited  {
    background: ${({theme}) => mobileDetect.isMobile() ? 'initial' : theme.colors.gray300}
  };
 :active {
    background: ${({theme}) => mobileDetect.isIos() ? 'initial' : theme.colors.gray300}
  }
  padding: 12px 20px;
  ${body4};
  color: ${({theme}) => theme.colors.gray700};
`;
