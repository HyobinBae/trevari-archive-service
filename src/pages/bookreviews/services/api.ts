import { bookreviewBackend } from 'api/backend';
import { Bookreview, BookreviewsOptions } from 'types/__generate__/user-backend-api';
import {
  GET_BOOKREVIEW,
  GET_BOOKREVIEWS,
  GET_BOOKREIVEW_LIKEUSERS,
  DELETE_BOOKREVIEW_COMMENT,
  UPDATE_BOOKREVIEW_COMMENT,
  CREATE_BOOKREVIEW_COMMENT,
  REPORT_BOOKREVIEW_COMMENT,
  TOGGLE_LIKE_BOOKREVIEW_COMMENT,
  TOGGLE_LIKE_BOOKREVIEW,
  GET_BOOKREVIEW_COMMENT_LIKEUSERS,
  DELETE_BOOKREVIEW,
  GET_BOOKREVIEWS_TEMP,
} from './graphql';
import { LikeUser } from './types';

export const bookreviewApi = bookreviewBackend.injectEndpoints({
  overrideExisting: true,
  endpoints: build => ({
    getBookreviews: build.query<Array<Bookreview>, { limit: number; offset: number; userID: string }>({
      query: ({ limit, offset, userID }) => ({
        document: GET_BOOKREVIEWS,
        variables: {
          limit,
          offset,
          userID,
        },
      }),
      transformResponse: ({ bookreviewsV2 }: { bookreviewsV2: Array<Bookreview> }) => bookreviewsV2,
      providesTags: ['BookreviewsV2'],
    }),
    getBookreviewsTemp: build.query<Array<Bookreview>, BookreviewsOptions>({
      query: (options: {
        limit?: number;
        offset?: number;
        where?: {
          clubID?: string;
          order?: number;
          status?: string;
          userID?: string;
        };
      }) => ({
        document: GET_BOOKREVIEWS_TEMP,
        variables: { options },
      }),
      transformResponse: ({ bookreviewsTemp }: { bookreviewsTemp: Array<Bookreview> }) => bookreviewsTemp,
      providesTags: ['bookreviewsTemp'],
    }),
    getBookreview: build.query<Bookreview, { id: string }>({
      query: ({ id }) => ({
        document: GET_BOOKREVIEW,
        variables: {
          id,
        },
      }),
      transformResponse: ({ bookreview }: { bookreview: Bookreview }) => bookreview,
      providesTags: ['Bookreview'],
    }),
    getBookreviewLikeUsers: build.query<LikeUser[], { id: string }>({
      query: ({ id }) => ({
        document: GET_BOOKREIVEW_LIKEUSERS,
        variables: {
          id,
        },
      }),
      transformResponse: ({ bookreviewLikeUsers }: { bookreviewLikeUsers: LikeUser[] }) => bookreviewLikeUsers,
      providesTags: ['Bookreview'],
    }),
    getBookreviewCommentLikeUsers: build.query<LikeUser[], { id: string }>({
      query: ({ id }) => ({
        document: GET_BOOKREVIEW_COMMENT_LIKEUSERS,
        variables: {
          id,
        },
      }),
      transformResponse: ({ bookreviewCommentLikeUsers }: { bookreviewCommentLikeUsers: LikeUser[] }) =>
        bookreviewCommentLikeUsers,
      providesTags: ['Bookreview'],
    }),
    deleteBookreview: build.mutation({
      query: ({ id }) => ({
        document: DELETE_BOOKREVIEW,
        variables: {
          id,
        },
      }),
      invalidatesTags: ['Bookreview'],
    }),
    toggleLikeOnBookreview: build.mutation({
      query: ({ id, userID }) => ({
        document: TOGGLE_LIKE_BOOKREVIEW,
        variables: {
          id,
          userID,
        },
      }),
      invalidatesTags: ['Bookreview'],
    }),
    deleteBookreviewComment: build.mutation({
      query: ({ id }) => ({
        document: DELETE_BOOKREVIEW_COMMENT,
        variables: {
          id,
        },
      }),
      invalidatesTags: ['BookreviewsV2'],
    }),
    updateBookreviewComment: build.mutation({
      query: ({ input: { id, content } }) => ({
        document: UPDATE_BOOKREVIEW_COMMENT,
        variables: {
          input: {
            id,
            content,
          },
        },
      }),
      invalidatesTags: ['Bookreview'],
    }),
    createBookreviewComment: build.mutation({
      query: ({ input: { bookreviewID, content, parentID, userID } }) => ({
        document: CREATE_BOOKREVIEW_COMMENT,
        variables: {
          input: {
            bookreviewID,
            content,
            parentID,
            userID,
          },
        },
      }),
      invalidatesTags: ['Bookreview'],
    }),
    toggleLikeOnBookreviewComment: build.mutation({
      query: ({ id, userID }) => ({
        document: TOGGLE_LIKE_BOOKREVIEW_COMMENT,
        variables: {
          id,
          userID,
        },
      }),
      invalidatesTags: ['Bookreview'],
    }),
    reportOnBookreviewComment: build.mutation({
      query: ({ id, userID }) => ({
        document: REPORT_BOOKREVIEW_COMMENT,
        variables: {
          id,
          userID,
        },
      }),
    }),
  }),
});

export const {
  useGetBookreviewsQuery,
  useGetBookreviewsTempQuery,
  useGetBookreviewQuery,
  useGetBookreviewLikeUsersQuery,
  useToggleLikeOnBookreviewMutation,
  useUpdateBookreviewCommentMutation,
  useCreateBookreviewCommentMutation,
  useDeleteBookreviewCommentMutation,
  useReportOnBookreviewCommentMutation,
  useToggleLikeOnBookreviewCommentMutation,
} = bookreviewApi;

export const {
  endpoints: {
    getBookreviews,
    getBookreviewsTemp,
    getBookreview,
    getBookreviewLikeUsers,
    toggleLikeOnBookreview,
    createBookreviewComment,
    updateBookreviewComment,
    deleteBookreviewComment,

    getBookreviewCommentLikeUsers,
    reportOnBookreviewComment,
    toggleLikeOnBookreviewComment,
    deleteBookreview,
  },
} = bookreviewApi;
