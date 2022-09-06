import { userBackendApi } from 'apis/user-backend-api';
import { GET_BANNERS, GET_MAIN_POSTS } from 'apis/user-backend-api/main.graphql';
import { Banner, Post, QueryBannersArgs, QueryMainPostsArgs } from 'types/__generate__/user-backend-api';

export const mainApi = userBackendApi.injectEndpoints({
  endpoints: build => ({
    getBanners: build.query<Array<Banner>, QueryBannersArgs>({
      query: ({ limit, offset, where }) => ({
        document: GET_BANNERS,
        variables: {
          limit,
          offset,
          where,
        },
      }),
    }),
    getPosts: build.query<Array<Post>, QueryMainPostsArgs>({
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

export const { useGetBannersQuery, useGetPostsQuery } = mainApi;

export const {
  endpoints: { getBanners, getPosts },
} = mainApi;
