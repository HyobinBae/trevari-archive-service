import React from 'react';
import { ClickMore, ListHeader, ListTitleWrapper, MoreText } from 'pages/main/styles/main.style';
import ga from 'pages/main/ga';

interface IProps {
  title: string;
  more?: string;
}

const TagTitle = ({ title, more }: IProps) => {
  const clickMoreButton = () => {
    ga.event({ category: '메인 페이지', action: '태그 전체 보기', label: title });
  };
  return (
    <ListHeader>
      <ListTitleWrapper>{title}</ListTitleWrapper>
      {more && (
        <ClickMore href={more} onClick={clickMoreButton}>
          <MoreText>전체보기</MoreText>
        </ClickMore>
      )}
    </ListHeader>
  );
};

export default TagTitle;
