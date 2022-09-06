import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import main from 'ducks/main';
import { userBackendApi } from 'apis/user-backend-api';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['main'],
};
export const rootReducer = combineReducers({
  [userBackendApi.reducerPath]: userBackendApi.reducer,
  main,
});

export default persistReducer(persistConfig, rootReducer);
