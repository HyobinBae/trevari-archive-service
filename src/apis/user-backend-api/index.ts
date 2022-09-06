import { GraphQLClient } from 'graphql-request';
import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';

import { GUEST_TOKEN } from 'common/const';
import { storage } from 'apis';

export const client = new GraphQLClient('http://localhost:8000/graphql', {});

export const userBackendApi = createApi({
  baseQuery: graphqlRequestBaseQuery({
    client,
    prepareHeaders: async (headers, { getState }) => {
      const token = storage.getToken$() || GUEST_TOKEN;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  reducerPath: 'userBackendApi',
  endpoints: () => ({}),
});
