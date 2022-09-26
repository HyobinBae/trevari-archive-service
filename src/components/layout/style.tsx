import styled from '@emotion/styled';

export const AppQRCodeDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 38px;
  align-items: center;
`;

export const AppQRCodeTextDiv = styled.div`
  margin-left: 5px;
`;

export const ViewMoreText = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray900};
`;

export const DownloadAppText = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray900};
  font-weight: bold;
`;

export const DownloadAppCompDiv = styled.div`
  position: fixed;
  display: block;
  width: auto;
  right: calc(50vw + 250px + 46px);
  top: 50%;
  transform: translateY(-50%);
`;
