import styled from '@emotion/styled';
import {body8, contents2, heading9, title6} from '@trevari/typo';
import { Bookreview } from 'types/__generate__/user-backend-api';
import React from "react";

interface BookreviewContentProps {
  bookreview: Bookreview;
}
const BookreviewContent = ({ bookreview }: BookreviewContentProps) => {
  const { contents, content, title } = bookreview;
  const bookContent = contents.filter((item: Content) => item.type === 'book');
  const movieContent = contents.filter((item: Content) => item.type === 'movie');

  return (
    <Base>
      <Title>{title}</Title>
      <Content>
          <p dangerouslySetInnerHTML={{__html:content}}></p>
      </Content>
      <BookMovieDivWrapper>
        {bookContent.length > 0 && (
          <BookMovieDiv>
            <BookMovieSpan>책 | </BookMovieSpan>
            {bookContent[0].author}, {bookContent[0].title}
          </BookMovieDiv>
        )}
        {movieContent.length > 0 && (
          <BookMovieDiv>
            <BookMovieSpan>영화 | </BookMovieSpan>
            {bookContent[0].author && bookContent[0].author + ', '} {movieContent[0].title}
          </BookMovieDiv>
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
