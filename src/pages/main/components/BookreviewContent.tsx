import styled from '@emotion/styled';
import {body8, contents2, heading9, title6} from '@trevari/typo';
import { Bookreview } from 'types/__generate__/user-backend-api';
import React from "react";

interface BookreviewContentProps {
  bookreview: Bookreview;
}
const BookreviewContent = ({ bookreview }: BookreviewContentProps) => {
  const { contents, content, title } = bookreview;
  const customContents = contents && contents.length > 0 ? contents.map((c: Content, index) => {
    if(index < 2) {
      return {
        id: c.id,
        customType: c.type === 'book' ? '책' : '기타',
        author: c.author,
        title: c.type === 'book' ? '『' + c.title + '』' : '「' + c.title + '」',
      }
    }
  })
  .filter(c => c) : [];

  return (
    <Base>
      <Title>{title}</Title>
      <Content>
          <div dangerouslySetInnerHTML={{__html:content}}></div>
      </Content>
      <BookMovieDivWrapper>
        {customContents.length > 0 && (
          <>
          {customContents.map((item) => (
            <BookMovieDiv key={item.id}>
              <BookMovieSpan>{item.customType} | </BookMovieSpan>
              {
                item.author ? item.author + ', ' + item.title : item.title}
            </BookMovieDiv>
          ))}
          </>
        )}
      </BookMovieDivWrapper>
    </Base>
  );
};

const Base = styled.div`
  padding: 0 20px 20px;
  p {
    margin: unset;
  }
`;
const Title = styled.h3`
  ${heading9};
  margin: 4px 0 20px;
`;

const Content = styled.div`
  ${contents2};
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  margin-bottom: 20px;
  line-height: 30px;
`;

const BookMovieDiv = styled.div`
  ${body8};
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.gray600};
`;
const BookMovieDivWrapper = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`;
const BookMovieSpan = styled.span`
  ${title6};
  color: ${({ theme }) => theme.colors.gray600};
`;
export default BookreviewContent;
