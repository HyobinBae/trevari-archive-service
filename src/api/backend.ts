import { GraphQLClient } from 'graphql-request';
import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';

import { endpoints } from 'config';
import { RootState } from 'services/store';
import { GET_USER } from 'services/auth/auth.graphql';
import { User } from 'types/__generate__/user-backend-api';

export const client = new GraphQLClient(endpoints.user_backend_api_graphql_endpoint);

export const backend = createApi({
  baseQuery: graphqlRequestBaseQuery({
    client,
    prepareHeaders: async (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('Accept', 'application/json');
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
    customErrors: ({ name, stack, response, message }) => {
      if (response.status === 200 && response.errors && response.errors.length > 0) {
        throw Error(response.errors[0].message);
      }
      return {
        name,
        message,
        errorCode: response.status,
        stack,
      };
    },
  }),
  reducerPath: 'backend',
  endpoints: build => ({
    getUser: build.query<User, string>({
      query: id => ({
        document: GET_USER,
        variables: {
          id,
        },
      }),
      transformResponse: ({ user }: { user: User }) => user,
    }),
  }),
});

export const {
  endpoints: { getUser },
} = backend;
