export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export const GUEST_TOKEN = process.env.REACT_APP_GUEST_TOKEN;

export const endpoints = {
  user_backend_api_graphql_endpoint: IS_PRODUCTION
    ? 'https://user-backend-api.trevari.co.kr/graphql'
    : process.env.REACT_APP_BACKEND_GQL || '',
  user_login_page_url: IS_PRODUCTION ? 'https://dev-login.trevari.co.kr' : 'http://localhost:3001',
  user_login_endpoint: IS_PRODUCTION ? 'https://login-api.trevari.co.kr/graphql' : 'http://localhost:10000/graphql',
};
