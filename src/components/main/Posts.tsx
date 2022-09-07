import ListTitle from './ListTitle';
import Box from '../base/Box';
import {
  MultiCard,
  MultiCardContent,
  MultiCardHero,
  MultiCardParagraph,
  MultiCardTitle,
} from '@trevari/business-components';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import React from 'react';
import styled from '@emotion/styled';
import { body7 } from '@trevari/typo';

interface IProps {
  posts: any[];
}
const Posts = ({ posts }: IProps) => {
  const blogs = posts.filter(({ category }) => category !== '공지');
  const notices = posts.filter(({ category }) => category === '공지');
  return (
    <Wrapper>
      <ListTitle title="블로그" more="/blog" />
      <BlogListBody>
        {blogs.slice(0, 2).map(post => (
          <Box key={post.id} style={{ marginBottom: '24px' }}>
            <a href={`/blog/show?id=${post.id}`}>
              <MultiCard hero={<MultiCardHero src={post.thumbnailUrl} alt="이미지" />} style={{ width: '100%' }}>
                <MultiCardContent>
                  <MultiCardTitle>{post.title}</MultiCardTitle>
                  <Box style={{ marginTop: '8px' }}>
                    <MultiCardParagraph>{post.description}</MultiCardParagraph>
                  </Box>
                  <LayerSmallText>
                    {' '}
                    조회수 {post.viewCount} · {format(new Date(post.createdAt), 'yyyy.MM.dd', { locale: ko })}{' '}
                  </LayerSmallText>
                </MultiCardContent>
              </MultiCard>
            </a>
          </Box>
        ))}
      </BlogListBody>
    </Wrapper>
  );
};

export default Posts;

const LayerSmallText = styled.div`
  ${body7};
  color: ${({ theme }) => theme.colors.gray600};
  margin-top: 16px;
`;

const BlogListBody = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  ${({ theme }) => theme.breakPoint.mobile} {
    padding: 0 20px;
    flex-direction: column;
    align-items: center;
    grid-template-columns: repeat(1, 1fr);
  } ;
`;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
`;
