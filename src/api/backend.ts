import { GET_BANNERS } from 'graphql/main';
import Graphql from 'api/graphql';

export default class Backend extends Graphql {
  getBanners = () => {
    return this.client.request(GET_BANNERS);
  };
}
