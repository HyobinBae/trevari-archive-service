import { GraphQLClient } from 'graphql-request';
import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';

import { storage } from 'api';
import { endpoints, GUEST_TOKEN } from 'config';

export const client = new GraphQLClient(endpoints.USER_BACKEND_API_GRAPHQL_ENDPOINT, {});

export const backend = createApi({
  baseQuery: graphqlRequestBaseQuery({
    client,
    prepareHeaders: async (headers, { getState }) => {
      // TODO auth 작업시 auth에 토큰 set해주기
      // const storeToken = (getState() as RootState).auth.token;
      const token = storage.getToken$() || GUEST_TOKEN;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  reducerPath: 'backend',
  endpoints: () => ({}),
});
