import { backend } from 'api/backend';
import { ClubRole, QueryClubRolesArgs, User } from 'types/__generate__/user-backend-api';
import { GET_CLUB_ROLES, GET_USER, UPDATE_USER } from 'services/user/user.graphql';

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
    getClubRoles: build.query<ClubRole[], QueryClubRolesArgs>({
      query: ({
        limit,
        offset,
        where,
      }: {
        limit?: number;
        offset?: number;
        where: {
          season?: string;
          clubID?: string;
          userID?: string;
          role?: string;
          refundStatuses?: ['환불 입금 대기' | '환불 입금 완료' | '멤버십 해지 완료' | null];
          includesClosedClubs?: boolean;
          isPastSeason?: boolean;
        };
      }) => ({
        document: GET_CLUB_ROLES,
        variables: {
          limit,
          offset,
          where,
        },
      }),
      transformResponse: ({ clubRoles }: { clubRoles: ClubRole[] }) => clubRoles,
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;

export const {
  endpoints: { getUser, updateUser, getClubRoles },
} = userApi;
