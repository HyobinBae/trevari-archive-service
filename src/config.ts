export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export const GUEST_TOKEN = IS_PRODUCTION
  ? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Imd1ZXN0Iiwic2NvcGUiOiJndWVzdCIsImlhdCI6MTUxODI1ODAxNX0.8t38A8G4x2I5SyKyU1Ibm-pZ2GtlqjgUvIbT8OXzGek'
  : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Imd1ZXN0Iiwic2NvcGUiOiJndWVzdCIsImlhdCI6MTUxODI1ODA3N30.qRWF3MlIiYCdo0Gs-Yv6XrUlpw8pn2Tsw4VjNtkxE5E';

export const endpoints = {
  user_backend_api_graphql_endpoint: IS_PRODUCTION
    ? 'https://user-backend-api.trevari.co.kr/graphql'
    : process.env.REACT_APP_BACKEND_GQL || 'http://localhost:8000/graphql',
  user_login_page_url: IS_PRODUCTION ? 'https://dev-login.trevari.co.kr' : 'http://localhost:3001',
  user_login_endpoint: IS_PRODUCTION ? 'https://login-api.trevari.co.kr/graphql' : 'http://localhost:10000/graphql',
};
