import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';
import { heading5 } from '@trevari/typo';

import { backend } from 'api';
import Layout from 'components/layout';
import HeroSlider from 'components/main/HeroSlider';
import BlogList from 'components/main/BlogList';
import Posts from 'components/main/Posts';

function Main() {
  const { data: bannersData, isFetched: isFetchedBanners } = useQuery(['banners'], backend.getBanners);
  const { data: postsData, isFetched: isFetchedPosts } = useQuery(['mainPosts'], backend.getMainPosts);

  return (
    <Layout>
      <Base>{isFetchedBanners && <HeroSlider banners={bannersData.banners} />}</Base>
      <Base>
        {isFetchedPosts && (
          <Blogs>
            <Posts posts={postsData.mainPosts} />
          </Blogs>
        )}
      </Base>
    </Layout>
  );
}

export default Main;

const Base = styled.div`
  width: 100%;
  height: 100%;
`;
const Title = styled.h6`
  ${heading5};
  width: 100%;
  text-align: center;
`;

const Blogs = styled.div`
  padding: 54px 0 80px;
  ${({ theme }) => theme.breakPoint.mobile} {
    padding: 20px 0;
  }
`;
