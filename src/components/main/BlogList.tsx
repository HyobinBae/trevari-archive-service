import React from 'react';
import { format } from 'date-fns';
import styled from '@emotion/styled';
import {
  MultiCard,
  MultiCardContent,
  MultiCardHero,
  MultiCardParagraph,
  MultiCardTitle,
} from '@trevari/business-components';
import { body7 } from '@trevari/typo';

import Box from 'components/base/Box';
import { useWindowSize } from 'utils/windowResize';
import ListTitle from 'components/main/ListTitle';

interface IProps {
  blogs?: any[];
}

const BlogList = ({ blogs }: IProps) => {
  console.log('blogs', blogs);
  const { mode } = useWindowSize();
  const mobile = blogs.slice(0, 2);
  const pc = blogs.slice(0, 3);
  const posts = mode === 'sm' ? mobile : pc;

  return (
    <Wrapper>
      <ListTitle title="블로그" more="/blog" />
      <BlogListBody>
        {posts.map(post => (
          <Box style={{ marginBottom: '24px' }}>
            <a href={`/blog/show?id=${post.id}`}>
              <MultiCard hero={<MultiCardHero src={post.thumbnailUrl} alt="이미지" />} style={{ width: '100%' }}>
                <MultiCardContent>
                  <MultiCardTitle>{post.title}</MultiCardTitle>
                  <Box style={{ marginTop: '8px' }}>
                    <MultiCardParagraph>{post.description}</MultiCardParagraph>
                  </Box>
                  <LayerSmallText>
                    {' '}
                    조회수 {post.viewCount} · {format(post.createdAt, 'YYYY.MM.DD')}{' '}
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

export default BlogList;

const LayerSmallText = styled.div`
  ${body7};
  color: ${({ theme }) => theme.colors.gray600};
  margin-top: 16px;
`;

const BlogListBody = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 24px;
  padding: 0 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
`;
