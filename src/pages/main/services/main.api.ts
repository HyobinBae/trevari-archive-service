import { backend } from 'api/backend';
import {
  CREATE_WISH_CLUB,
  DELETE_WISH_CLUB,
  GET_BANNERS, GET_CLUBS_FOR_LISTS,
  GET_CURATION_DISPLAY_ORDERS,
  GET_CURATION_LIST,
  GET_MAIN_POSTS,
  GET_WISH_CLUBS,
} from 'pages/main/services/main.graphql';
import {
  QueryBannersArgs,
  Banner,
  ClubsWithTag,
  ClubWithTagDatasInput,
  QueryDisplayOrdersArgs,
  DisplayOrder,
  QueryMainPostsArgs,
  Post,
  WishClub,
  QueryWishClubsArgs,
  CreateWishClubPayload, QueryClubsArgs, Club,
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
    getWishClubs: build.query<Array<WishClub>, QueryWishClubsArgs>({
      query: ({ limit, offset, where }) => ({
        document: GET_WISH_CLUBS,
        variables: {
          limit,
          offset,
          where,
        },
      }),
      transformResponse: ({ wishClubs }: { wishClubs: Array<WishClub> }) => wishClubs,
    }),
    getScheduledClubs: build.query<Array<Club>, QueryClubsArgs>({
      query: ({ limit,
                offset,
                where,
                order,
                randomSeed,
                mostFullClubConditionPercent,
                isTopAllMostFullClubs,
                containsFullClub,
                searchByLeaderName }) => ({
        document: GET_CLUBS_FOR_LISTS,
        variables: {
          limit,
          offset,
          where,
          order,
          randomSeed,
          mostFullClubConditionPercent,
          isTopAllMostFullClubs,
          containsFullClub,
          searchByLeaderName
        },
      }),
      transformResponse: ({ clubs }: { clubs: Array<Club> }) => clubs,
    }),
    createWishClub: build.mutation({
      query: input => ({
        document: CREATE_WISH_CLUB,
        variables: input,
      }),
      transformResponse: ({ createWishClub }: { createWishClub: CreateWishClubPayload }) => createWishClub,
    }),
    deleteWishClub: build.mutation({
      query: ({ clubID, userID }) => ({
        document: DELETE_WISH_CLUB,
        variables: {
          clubID,
          userID,
        },
      }),
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

export const {
  useGetBannersQuery,
  useGetCurationDisplayOrdersQuery,
  useGetWishClubsQuery,
  useGetScheduledClubsQuery,
  useGetCurationsQuery,
  useGetPostsQuery,
} = mainApi;

export const {
  endpoints: {
    getBanners,
    getPosts,
    getWishClubs,
    getScheduledClubs,
    createWishClub,
    deleteWishClub,
    getCurationDisplayOrders,
    getCurations,
  },
} = mainApi;
