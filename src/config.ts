export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export const GUEST_TOKEN = process.env.REACT_APP_GUEST_TOKEN;

export const endpoints = {
  USER_BACKEND_API_GRAPHQL_ENDPOINT: IS_PRODUCTION
    ? 'https://user-backend-api.trevari.co.kr/graphql'
    : process.env.REACT_APP_BACKEND_GQL || '',
};
