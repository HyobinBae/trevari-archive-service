import Cookies from 'universal-cookie';

interface Tokens {
  refresh_token: string;
  token: string;
}

const TOKENS = {
  refresh_token: '',
  token: '',
};

const TOKEN_KEY = 'token';
const REFRESH_TOKEN_KEY = 'refresh_token';

const cookies = new Cookies();

class Storage {
  static getToken$() {
    throw new Error('Method not implemented.');
  }
  clearAll$() {
    try {
      cookies.remove('tr_user_token');
    } catch (err) {
      console.error('clear not supported.', err);
    }
  }

  setTokens$(tokens: Tokens = TOKENS) {
    try {
      cookies.set(TOKEN_KEY, tokens.token);
      cookies.set(REFRESH_TOKEN_KEY, tokens.refresh_token);
    } catch (err) {
      console.error(`Error occurred in setTokens -> `, err);
    }
  }
  getToken$(): Tokens {
    try {
      return cookies.get('tr_user_token');
    } catch (err) {
      console.error(`Error occurred in getTokens -> `, err);
      return TOKENS;
    }
  }
  removeTokens$() {
    try {
      cookies.remove('tr_user_token');
    } catch (err) {
      console.error(`Error occurred in removeTokens -> `, err);
    }
  }
}

export default Storage;
