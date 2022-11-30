import styled from '@emotion/styled';
import React from 'react';
import { format } from 'date-fns';

import { useGetPostsQuery } from 'pages/main/services/main.api';
import CurationTitle from 'pages/main/components/CurationTitle';
import {
  Base,
  PostListWrap,
  DateFormat,
  NoticeContents,
  NoticeItems,
  NoticeListBody,
  TextOverflowForTitle,
} from 'pages/main/styles/main.style';
import { Post } from 'types/__generate__/user-backend-api';
import LineArrow from 'components/svgs/LineArrow';
import { endpoints } from 'config';
import { Divider } from 'pages/curations/curations.styles';
import { Loading } from '@trevari/components';

const Posts = () => {
  const { data: posts, isLoading } = useGetPostsQuery({ limit: 10, excludeClosedPost: true });

  if (isLoading) return <Loading variant="post" />;
  const notices = posts?.filter(({ category }) => category === '공지').slice(0, 3) || [];
  return (
    <Base>
      <Divider style={{ height: '10px', backgroundColor: '#F7F7F5' }} />
      <PostListWrap show={notices.length > 0}>
        <CurationTitle title="공지사항" more={`${endpoints.user_page_url}/blog?category=공지`} />
        <NoticeListBody>
          {notices.map(({ id, title, createdAt, updatedAt }: Post) => (
            <Link href={`${endpoints.user_page_url}/blog/show?id=${id}`} key={id}>
              <NoticeItems>
                <NoticeContents>
                  <TextOverflowForTitle>{title}</TextOverflowForTitle>
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
