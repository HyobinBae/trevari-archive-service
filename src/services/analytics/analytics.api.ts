import { backend } from 'api/backend';
import { FB_CONVERSION_PAGE_VIEW } from 'services/analytics/analytics.graphql'

export const analyticsApi = backend.injectEndpoints({
  overrideExisting: true,
  endpoints: build => ({
    pageView: build.mutation({
      query: ({ input }) => ({
        document: FB_CONVERSION_PAGE_VIEW,
        variables: {
          input,
        },
      }),
    }),
  }),
});

export const { usePageViewMutation } = analyticsApi;

export const {
  endpoints: { pageView },
} = analyticsApi;
