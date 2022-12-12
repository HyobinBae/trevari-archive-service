import styled from '@emotion/styled';
import { body4, heading8 } from '@trevari/typo';

export const CurationInfoBox = styled.div`
  padding: 0 20px;
`;
export const CurationTitle = styled.div`
  ${heading8};
`;

export const CurationBody = styled.div`
  ${body4};
  margin: 16px 0 40px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #f7f7f5;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
`;
