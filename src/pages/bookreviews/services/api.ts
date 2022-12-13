import { backend } from 'api/backend';
import { builtinModules } from 'module';
import { Bookreview } from 'types/__generate__/user-backend-api';
import {
  GET_BOOKREVIEW,
  DELETE_BOOKREVIEW_COMMENT,
  UPDATE_BOOKREVIEW_COMMENT,
  CREATE_BOOKREVIEW_COMMENT,
  REPORT_BOOKREVIEW_COMMENT,
  TOGGLE_LIKE_BOOKREVIEW_COMMENT,
} from './graphql';

export const bookreviewApi = backend.injectEndpoints({
  overrideExisting: true,
  endpoints: build => ({
    getBookreview: build.query<Array<Bookreview>, { id: string }>({
      query: ({ id }) => ({
        document: GET_BOOKREVIEW,
        variables: {
          id,
        },
      }),
      transformResponse: ({ bookreview }: { bookreview: Array<Bookreview> }) => bookreview,
    }),
    deleteBookreviewComment: build.mutation({
      query: ({ id }) => ({
        document: DELETE_BOOKREVIEW_COMMENT,
        variables: {
          id,
        },
      }),
    }),
    updateBookreviewComment: build.mutation({
      query: ({ id, content }) => ({
        document: UPDATE_BOOKREVIEW_COMMENT,
        variables: {
          id,
          content,
        },
      }),
    }),
    createBookreviewComment: build.mutation({
      query: ({ id, content, parentID, userID }) => ({
        document: CREATE_BOOKREVIEW_COMMENT,
        variables: {
          id,
          content,
          parentID,
          userID,
        },
      }),
    }),
    toggleLikeOnBookreviewComment: build.mutation({
      query: ({ id, userID }) => ({
        document: TOGGLE_LIKE_BOOKREVIEW_COMMENT,
        variables: {
          id,
          userID,
        },
      }),
    }),
    reportOnBookreviewComment: build.mutation({
      query: ({ id, userID, reason }) => ({
        document: REPORT_BOOKREVIEW_COMMENT,
        variables: {
          id,
          userID,
          reason,
        },
      }),
    }),
  }),
});

export const { useGetBookreviewQuery } = bookreviewApi;

export const {
  endpoints: { getBookreview },
} = bookreviewApi;
