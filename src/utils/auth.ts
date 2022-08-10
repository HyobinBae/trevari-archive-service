import Cookies from 'universal-cookie';

const TOKEN_KEY = 'token';
const REFRESH_TOKEN_KEY = 'refresh_token';

const cookies = new Cookies();

export const saveAuthData = ({ token, refreshToken} :{token: string, refreshToken: string}) => {
  cookies.set(TOKEN_KEY, token);
  cookies.set(REFRESH_TOKEN_KEY, refreshToken);
};

export const getToken = () => {
  return cookies.get('tr_user_token');
};

export const getRefreshToken = () => {
  return cookies.get(REFRESH_TOKEN_KEY);
};

export const clearStorage = () => {
  cookies.remove('tr_user_token');
};
