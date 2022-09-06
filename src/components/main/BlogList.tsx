import React, { useEffect } from 'react';
import { format } from 'date-fns';
import {
  MultiCard,
  MultiCardContent,
  MultiCardHero,
  MultiCardParagraph,
  MultiCardTitle,
} from '@trevari/business-components';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import Box from 'components/base/Box';
import ListTitle from 'components/main/ListTitle';
import { useGetPostsQuery } from 'apis/user-backend-api/main';
import { setMainPosts } from 'ducks/main';
import { Post } from 'types/__generate__/user-backend-api';
import { useAppDispatch } from 'store';
import { Base, BlogListBody, BlogListWrap, LayerSmallText } from 'components/main/styles/main.style';

const BlogList = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useGetPostsQuery({ limit: 10, excludeClosedPost: true });

  const contents = isMobile ? data?.mainPosts.slice(0, 2) : data?.mainPosts.slice(0, 3);

  useEffect(() => {
    if (!isLoading) {
      dispatch(setMainPosts(contents));
    }
  }, [data, isLoading, error, dispatch]);

  if (isLoading) {
    return <>로딩중~~</>;
  }
  if (error) {
    return <>에러입니다. </>;
  }
  return (
    <Base>
      <BlogListWrap>
        <ListTitle title="블로그" more="//trevari.co.kr/blog" />
        <BlogListBody>
          {contents.map((post: Post) => (
            <Box style={{ marginBottom: '24px' }} key={post.id}>
              <Link to={`//trevari.co.kr/blog/show?id=${post.id}`}>
                <MultiCard hero={<MultiCardHero src={post.thumbnailUrl} alt="이미지" />} style={{ width: '100%' }}>
                  <MultiCardContent>
                    <MultiCardTitle>{post.title}</MultiCardTitle>
                    <Box style={{ marginTop: '8px' }}>
                      <MultiCardParagraph>{post.description}</MultiCardParagraph>
                    </Box>
                    <LayerSmallText>
                      {' '}
                      조회수 {post.viewCount} · {format(new Date(post.createdAt), 'yyyy.MM.dd')}{' '}
                    </LayerSmallText>
                  </MultiCardContent>
                </MultiCard>
              </Link>
            </Box>
          ))}
        </BlogListBody>
      </BlogListWrap>
    </Base>
  );
};

export default BlogList;
