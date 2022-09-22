import React from 'react';
import { format } from 'date-fns';
import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';
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
  BlogListWrap,
  DateFormat,
  LayerSmallText,
  NoticeContents,
  NoticeItems,
  NoticeListBody,
  NoticeListWrap,
  TextOverflowForDescription,
  TextOverflowForTitle,
} from 'pages/main/styles/main.style';
import { Post } from 'types/__generate__/user-backend-api';
import LineArrow from 'components/svgs/LineArrow';

const Posts = () => {
  const { data: posts, isLoading, error } = useGetPostsQuery({ limit: 10, excludeClosedPost: true });
  const blogs = posts?.filter(({ category }) => category !== '공지').slice(0, 3);
  const notices = posts?.filter(({ category }) => category === '공지').slice(0, 3);

  if (isLoading) {
    return <>로딩중~~</>;
  }
  if (error) {
    return <>에러입니다. </>;
  }
  return (
    <Base>
      <BlogListWrap>
        <CurationTitle title="블로그" more="//trevari.co.kr/blog" />
        <BlogListBody>
          {blogs?.map((post: Post) => (
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
      <NoticeListWrap>
        <CurationTitle title="공지사항" more="//trevari.co.kr/blog?category=공지" />
        <NoticeListBody>
          {notices?.map(({ id, title, description, createdAt, updatedAt }: any) => (
            <Link to={`//trevari.co.kr/blog/show?id=${id}`} target="blank" key={id}>
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
      </NoticeListWrap>
    </Base>
  );
};

export default Posts;
