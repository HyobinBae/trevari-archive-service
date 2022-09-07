import { backend } from 'api/backend';
import {
  GET_BANNERS,
  GET_CURATION_DISPLAY_ORDERS,
  GET_CURATION_LIST,
  GET_MAIN_POSTS,
} from 'pages/main/api/main.graphql';
import {
  QueryBannersArgs,
  Banner,
  ClubsWithTag,
  ClubWithTagDatasInput,
  QueryDisplayOrdersArgs,
  DisplayOrder,
  QueryMainPostsArgs,
  Post,
} from 'types/__generate__/user-backend-api';

export const mainApi = backend.injectEndpoints({
  overrideExisting: true,
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
      transformResponse: ({ banners }: { banners: Array<Banner> }) => banners,
    }),
    getCurationDisplayOrders: build.query<Array<DisplayOrder>, QueryDisplayOrdersArgs>({
      query: ({ limit, offset, where }) => ({
        document: GET_CURATION_DISPLAY_ORDERS,
        variables: { limit, offset, where },
      }),
      transformResponse: ({ displayOrders }: { displayOrders: Array<DisplayOrder> }) => displayOrders,
    }),
    getCurations: build.query<Array<ClubsWithTag>, ClubWithTagDatasInput>({
      query: options => ({
        document: GET_CURATION_LIST,
        variables: {
          options,
        },
      }),
      transformResponse: ({ clubWithTagDatas }: { clubWithTagDatas: Array<ClubsWithTag> }) => clubWithTagDatas,
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
      transformResponse: ({ mainPosts }: { mainPosts: Array<Post> }) => mainPosts,
    }),
  }),
});

export const { useGetBannersQuery, useGetCurationDisplayOrdersQuery, useGetCurationsQuery, useGetPostsQuery } = mainApi;

export const {
  endpoints: { getBanners, getPosts, getCurationDisplayOrders, getCurations },
} = mainApi;
