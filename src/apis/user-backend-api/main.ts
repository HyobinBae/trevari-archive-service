import { Banner, Maybe, QueryBannersArgs, QueryMainPostsArgs } from 'types/__generate__/user-backend-api';
import { userBackendApi } from 'apis/user-backend-api';
import { GET_BANNERS, GET_MAIN_POSTS } from 'apis/user-backend-api/main.graphql';

export const mainApi = userBackendApi.injectEndpoints({
  endpoints: build => ({
    getBanners: build.query<Array<Maybe<Banner>>, QueryBannersArgs>({
      query: ({ limit, offset, where }) => ({
        document: GET_BANNERS,
        variables: {
          limit,
          offset,
          where,
        },
      }),
    }),
    getMainPosts: build.query<Array<Maybe<Banner>>, QueryMainPostsArgs>({
      query: ({ limit, offset, excludeClosedPost }) => ({
        document: GET_MAIN_POSTS,
        variables: {
          limit,
          offset,
          excludeClosedPost,
        },
      }),
    }),
  }),
});

export const { useGetBannersQuery, useGetMainPostsQuery } = mainApi;

export const {
  endpoints: { getBanners, getMainPosts },
} = mainApi;
