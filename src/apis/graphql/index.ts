import { createClient } from '@urql/core';

import { storage } from 'apis';
import { GUEST_TOKEN } from 'common/const';

export const userBackendApi = createClient({
  url: 'http://localhost:8000/graphql',
  fetchOptions: () => {
    const token = storage.getToken$() || GUEST_TOKEN;
    return {
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  },
});
