import styled from '@emotion/styled';

export const AppQRCodeDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  align-items: center;
`;

export const AppQRCodeTextDiv = styled.div`
  margin-left: 2px;
`;

export const ViewMoreText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray900};
`;

export const DownloadAppText = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray900};
  font-weight: 700;
`;

export const DownloadAppCompDiv = styled.div`
  position: fixed;
  display: flex;
  width: 265px;
  right: calc(50vw + 250px + 46px);
  top: 50%;
  transform: translateY(-50%);
  flex-direction: column;
  align-items: center;
`;
