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

import { useGetPostsQuery } from 'apis/user-backend-api/main';
import Box from 'components/base/Box';
import ListTitle from 'components/main/ListTitle';
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
} from 'components/main/styles/main.style';
import { Post } from 'types/__generate__/user-backend-api';
import LineArrow from 'svgs/LineArrow';

const BlogList = () => {
  const { data: posts, isLoading, error } = useGetPostsQuery({ limit: 10, excludeClosedPost: true });
  const b = posts?.filter(({ category }) => category !== '공지');
  const n = posts?.filter(({ category }) => category === '공지');

  const blogs = isMobile ? b?.slice(0, 2) : b?.slice(0, 3);
  const notices = isMobile ? n?.slice(0, 3) : n?.slice(0, 4);

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
        <ListTitle title="공지사항" more="//trevari.co.kr/blog?category=공지" />
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

export default BlogList;
