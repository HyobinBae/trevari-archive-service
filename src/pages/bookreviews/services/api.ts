import { backend } from 'api/backend';
import { Bookreview } from 'types/__generate__/user-backend-api';
import { GET_BOOKREVIEW } from './graphql';

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
  }),
});

export const { useGetBookreviewQuery } = bookreviewApi;

export const {
  endpoints: { getBookreview },
} = bookreviewApi;
