import { createSlice } from '@reduxjs/toolkit';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { GUEST_TOKEN } from 'config';
import { isEmpty } from 'lodash';

import Cookies from 'universal-cookie';
import { RootState } from 'services/store';
import { getToken, getUserLoginPageUrlBy } from 'utils/auth';

interface AuthState {
  token: string;
  decodedToken: JwtPayload;
  authenticated: boolean;
  isGuest: boolean;
}

const cookie = new Cookies();
const initialState: AuthState = {
  token: cookie.get('tr_user_token') || GUEST_TOKEN,
  decodedToken: {},
  authenticated: false,
  isGuest: true,
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    validateAuth: (state, { payload }) => {
      state.token = payload;
      state.decodedToken = jwtDecode<JwtPayload>(payload);
      if (!isEmpty(state.decodedToken) && state.decodedToken?.scope === 'user') {
        state.authenticated = true;
        state.isGuest = false;
      }
    },
    confirmAuth: state => {
      if (state.isGuest) {
        window.location.href = getUserLoginPageUrlBy('?redirectionUrl=' + `/`);
        validateAuth(getToken());
        return;
      }
    },
    updateAuth: (state, { payload }) => {
      state.token = payload;
      state.decodedToken = jwtDecode<JwtPayload>(payload);
      if (!isEmpty(state.decodedToken)) {
        state.authenticated = true;
      }
    },
  },
});

export const { validateAuth, confirmAuth, updateAuth } = auth.actions;

export const selectDecodedToken = (state: RootState) => state.auth.decodedToken;
export const selectAuthenticated = (state: RootState) => state.auth.authenticated;
export const selectUserId = (state: RootState) => state.auth.decodedToken.id;
export default auth.reducer;
