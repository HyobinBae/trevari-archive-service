import { GraphQLClient } from 'graphql-request';
import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { endpoints } from 'config';
import { RootState } from 'services/store';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import {
  ReplayListProps,
  MagazineListProps,
  PlatformProps,
  LiveDate,
  LiveLink,
} from '../pages/platform/services/platform.types';


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
  endpoints: () => ({}),
});

export const bookreviewClient = new GraphQLClient(endpoints.bookreview_api_graphql_endpoint);

export const bookreviewBackend = createApi({
  baseQuery: graphqlRequestBaseQuery({
    client: bookreviewClient,
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
  reducerPath: 'bookreviewBackend',
  endpoints: () => ({}),
});

export const PlatformGetApi = createApi({
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://192.168.1.12:3000',
    // baseUrl: '/'
    baseUrl: 'http://subscriber-club.trevari.co.kr:3000'
  }),
  tagTypes: ['GET'],
  endpoints: (builder) => ({
    getPlatform: builder.query<Array<PlatformProps>,{platformID: number}>({
      query: ({ platformID }) => ({
        // url: '/platformTitle.json',
        url:`/platform/${platformID}`,
        method: 'get',
        prepareHeaders: (headers:Headers)=>{
          headers.set("Content-Type",'Application/json')
          return headers
        },
        variables: { platformID },
      }),
      transformResponse: (
        response: {data: PlatformProps}
      ) => {
        return response;
      },
      transformErrorResponse: (
        response: { status: string | number },
      ) => {
        return(response.status)
      },
      providesTags: (result, error) => [{ type: 'GET' }],
    }),
    getReplay: builder.query<Array<ReplayListProps[]>,{platformID:number, searchParams:string}>({
      query: ({ platformID, searchParams }) => ({
        // url: '/platform/:platformID/',
        url: `/platform/${platformID}/archive?${searchParams}`,
        method: 'get',
        prepareHeaders:(headers:Headers)=>{
          headers.set("Content-Type",'Application/json')
          return headers
        },
        variables: {platformID},
      }),
      transformResponse: (
        response: { data: ReplayListProps }
      ) => {
        return response;
      },
      transformErrorResponse: (
        response: { status: string | number },
      ) => response.status,
    }),
    getMagazine: builder.query<Array<MagazineListProps>,{platformID:number, searchParams: string}>({
      query: ({ platformID ,searchParams}) => ({
        url: `/platform/${platformID}/archive?${searchParams}`,
        method: 'get',
        prepareHeaders: (headers:Headers) => {
          headers.set("Content-Type",'Application/json')
          return headers
        },
        variables: {platformID}
      }),
      transformResponse: (
        response: { data: MagazineListProps }
      ) => {
        return response;
      },
      transformErrorResponse: (
        response: { status: string | number },
      ) => response.status,
      providesTags: (result, error) => [{ type: 'GET' }],
    }),
    getLiveDate: builder.query<Array<LiveDate[]>,{ platformID:number }>({
      query: ({ platformID }) => ({
        url: `/platform/${platformID}/liveDate`,
        method: 'get',
        prepareHeaders: (headers:Headers) => {
          headers.set("Content-Type",'Application/json')
          return headers
        },
        variables: {platformID}
      }),
      transformResponse: (
        response: { data: LiveDate[] }
      ) => {
        return (response);
      },
      transformErrorResponse: (
        response: { status: string | number },
      ) => response.status,
      providesTags: (result, error) => [{ type: 'GET' }],
    }),
    getLiveLink: builder.query<Array<LiveLink>,{ platformID:number }>({
      query: ({ platformID }) => ({
        url: `/platform/${platformID}/liveLink`,
        method: 'get',
        prepareHeaders: (headers:Headers) => {
          headers.set("Content-Type",'Application/json')
          return headers
        },
        variables: {platformID}
      }),
      transformResponse: (
        response: { data: LiveLink }
      ) => {
        return (response);
      },
      transformErrorResponse: (
        response: { status: string | number },
      ) => response.status,
      providesTags: (result, error) => [{ type: 'GET' }],
    }),
  })
})


export const {
  endpoints:{
    getReplay,
    getMagazine,
    getPlatform,
    getLiveDate,
    getLiveLink,
  },
} = PlatformGetApi
