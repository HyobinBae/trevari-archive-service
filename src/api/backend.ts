import { GET_BANNERS, GET_MAIN_POSTS } from 'graphql/main';
import Graphql from 'api/graphql';

export default class Backend extends Graphql {
  getBanners = () => {
    return this.client.request(GET_BANNERS);
  };
  getMainPosts = () => {
    return this.client.request(GET_MAIN_POSTS, { limit: 10, excludeClosedPost: true });
  };
}
