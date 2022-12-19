import { bookreviewBackend } from 'api/backend';
import { Bookreview } from 'types/__generate__/user-backend-api';
import {
  CREATE_BOOKREVIEW_COMMENT,
  DELETE_BOOKREVIEW,
  DELETE_BOOKREVIEW_COMMENT,
  GET_BOOKREIVEW_LIKEUSERS,
  GET_BOOKREVIEW,
  GET_BOOKREVIEW_COMMENT_LIKEUSERS,
  GET_BOOKREVIEWS,
  REPORT_BOOKREVIEW_COMMENT,
  TOGGLE_LIKE_BOOKREVIEW,
  TOGGLE_LIKE_BOOKREVIEW_COMMENT,
  UPDATE_BOOKREVIEW_COMMENT,
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
      transformResponse: ({ bookreviewsV2 }: { bookreviewsV2: Array<Bookreview>, count: number  }) => bookreviewsV2,
      providesTags: ['BookreviewsV2'],
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
