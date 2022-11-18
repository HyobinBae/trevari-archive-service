import React from 'react';
import styled from '@emotion/styled';
import { heading7, title2 } from '@trevari/typo';
import ga from 'pages/main/ga';

interface IProps {
  title: string;
  more?: string;
}

const CurationTitle = ({ title, more }: IProps) => {
  const clickMoreButton = () => {
    ga.event({ category: '메인 페이지', action: '블로그 전체 보기', label: title });
  };

  return (
    <ListHeader>
      <ListTitleWrapper>{title}</ListTitleWrapper>
      {more && (
        <ClickMore href={more} onClick={clickMoreButton}>
          <MoreList>전체보기</MoreList>
        </ClickMore>
      )}
    </ListHeader>
  );
};

export default CurationTitle;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px 0;
  width: 100%;
`;

const ListTitleWrapper = styled.div`
  ${heading7};
`;

const MoreList = styled.span`
  ${title2};
`;

const ClickMore = styled.a`
  color: ${({ theme }) => theme.colors.gray600};
`;
