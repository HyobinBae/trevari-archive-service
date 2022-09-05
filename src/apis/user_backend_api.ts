import { atomWithQuery } from 'jotai/urql';
import { userBackendApi } from 'apis/graphql';
import { GET_BANNERS } from 'apis/graphql/main.graphql';
import { Banner } from 'types/__generate__/user-backend-api';

export const bannersAtom = atomWithQuery<
  {
    banners: Banner[];
  },
  {}
>(
  () => ({
    query: GET_BANNERS,
    variables: {},
  }),
  () => userBackendApi,
);
