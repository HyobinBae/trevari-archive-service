import { backend } from 'api/backend';
import { User } from 'types/__generate__/user-backend-api';
import { GET_USER, UPDATE_USER } from 'services/user/user.graphql';

export const userApi = backend.injectEndpoints({
  overrideExisting: true,
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
    updateUser: build.mutation({
      query: ({ input }) => ({
        document: UPDATE_USER,
        variables: {
          input,
        },
      }),
      transformResponse: ({ updateUser }: { updateUser: User }) => updateUser,
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;

export const {
  endpoints: { getUser, updateUser },
} = userApi;
