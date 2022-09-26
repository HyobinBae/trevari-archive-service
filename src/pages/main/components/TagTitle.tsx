import React from 'react';
import { ClickMore, ListHeader, ListTitleWrapper, MoreText } from 'pages/main/styles/main.style';

interface IProps {
  title: string;
  more?: string;
}

const TagTitle = ({ title, more }: IProps) => {
  return (
    <ListHeader>
      <ListTitleWrapper>{title}</ListTitleWrapper>
      {more && (
        <ClickMore href={more}>
          <MoreText>전체보기</MoreText>
        </ClickMore>
      )}
    </ListHeader>
  );
};

export default TagTitle;
