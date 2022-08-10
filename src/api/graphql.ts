import { storage } from 'api';
import { GUEST_TOKEN } from 'common/const';
import { GraphQLClient } from 'graphql-request';

export default class Graphql {
  public client;
  constructor(baseURL?: string) {
    const token = storage.getToken$() || GUEST_TOKEN;
    this.client = new GraphQLClient(baseURL || '/graphql', {
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  }
}
