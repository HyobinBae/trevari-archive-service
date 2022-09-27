import styled from '@emotion/styled';
import React from 'react';
import { format } from 'date-fns';
import { isMobile } from 'react-device-detect';
import {
  MultiCard,
  MultiCardContent,
  MultiCardHero,
  MultiCardParagraph,
  MultiCardTitle,
} from '@trevari/business-components';

import { useGetPostsQuery } from 'pages/main/services/main.api';
import Box from 'components/base/Box';
import CurationTitle from 'pages/main/components/CurationTitle';
import {
  Base,
  BlogListBody,
  PostListWrap,
  DateFormat,
  LayerSmallText,
  NoticeContents,
  NoticeItems,
  NoticeListBody,
  TextOverflowForDescription,
  TextOverflowForTitle,
} from 'pages/main/styles/main.style';
import { Post } from 'types/__generate__/user-backend-api';
import LineArrow from 'components/svgs/LineArrow';
import { endpoints } from 'config';

const Posts = () => {
  const { data: posts } = useGetPostsQuery({ limit: 10, excludeClosedPost: true });
  const blogs = posts?.filter(({ category }) => category !== '공지').slice(0, 3) || [];
  const notices = posts?.filter(({ category }) => category === '공지').slice(0, 3) || [];

  return (
    <Base>
      <PostListWrap show={blogs?.length > 0}>
        <CurationTitle title="블로그" more={`${endpoints.user_page_url}/blog`} />
        <BlogListBody>
          {blogs?.map((post: Post) => (
            <Box style={{ marginBottom: '24px' }} key={post.id}>
              <Link href={`${endpoints.user_page_url}/blog/show?id=${post.id}`}>
                <MultiCard hero={<MultiCardHero src={post.thumbnailUrl} alt="이미지" />} style={{ width: '100%' }}>
                  <MultiCardContent>
                    <MultiCardTitle>{post.title}</MultiCardTitle>
                    <Box style={{ marginTop: '8px' }}>
                      <MultiCardParagraph>{post.description}</MultiCardParagraph>
                    </Box>
                    <LayerSmallText>
                      {' '}
                      조회수 {post.viewCount} · {format(Date.parse(post.createdAt), 'yyyy.MM.dd')}{' '}
                    </LayerSmallText>
                  </MultiCardContent>
                </MultiCard>
              </Link>
            </Box>
          ))}
        </BlogListBody>
      </PostListWrap>
      <PostListWrap show={notices?.length > 0}>
        <CurationTitle title="공지사항" more={`${endpoints.user_page_url}/blog?category=공지`} />
        <NoticeListBody>
          {notices?.map(({ id, title, description, createdAt, updatedAt }: Post) => (
            <Link href={`${endpoints.user_page_url}/blog/show?id=${id}`} key={id}>
              <NoticeItems>
                <NoticeContents>
                  <TextOverflowForTitle>{title}</TextOverflowForTitle>
                  {!isMobile && description && <TextOverflowForDescription>{description}</TextOverflowForDescription>}
                  <DateFormat>{format(new Date(createdAt) || new Date(updatedAt), 'yyyy.MM.dd')}</DateFormat>
                </NoticeContents>
                <LineArrow />
              </NoticeItems>
            </Link>
          ))}
        </NoticeListBody>
      </PostListWrap>
    </Base>
  );
};

export default Posts;

const Link = styled.a``;
