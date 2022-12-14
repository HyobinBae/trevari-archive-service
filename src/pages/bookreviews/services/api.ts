import { bookreviewBackend } from 'api/backend';
import { Bookreview } from 'types/__generate__/user-backend-api';
import {
  GET_BOOKREVIEW,
  DELETE_BOOKREVIEW_COMMENT,
  UPDATE_BOOKREVIEW_COMMENT,
  CREATE_BOOKREVIEW_COMMENT,
  REPORT_BOOKREVIEW_COMMENT,
  TOGGLE_LIKE_BOOKREVIEW_COMMENT,
} from './graphql';

export const bookreviewApi = bookreviewBackend.injectEndpoints({
  overrideExisting: true,
  endpoints: build => ({
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
    deleteBookreviewComment: build.mutation({
      query: ({ id }) => ({
        document: DELETE_BOOKREVIEW_COMMENT,
        variables: {
          id,
        },
      }),
      invalidatesTags: ['Bookreview'],
    }),
    updateBookreviewComment: build.mutation({
      query: ({ id, content }) => ({
        document: UPDATE_BOOKREVIEW_COMMENT,
        variables: {
          id,
          content,
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
  useGetBookreviewQuery,
  useUpdateBookreviewCommentMutation,
  useCreateBookreviewCommentMutation,
  useDeleteBookreviewCommentMutation,
  useReportOnBookreviewCommentMutation,
  useToggleLikeOnBookreviewCommentMutation,
} = bookreviewApi;

export const {
  endpoints: {
    getBookreview,
    createBookreviewComment,
    updateBookreviewComment,
    deleteBookreviewComment,
    reportOnBookreviewComment,
    toggleLikeOnBookreviewComment,
  },
} = bookreviewApi;
