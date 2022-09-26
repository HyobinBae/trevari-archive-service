import { configureStore, combineReducers, ThunkAction, Action, MiddlewareArray } from '@reduxjs/toolkit';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { backend } from 'api/backend';
import main from 'pages/main/services/main.store';
import auth from 'services/auth/auth.store';
import user from 'services/user/user.store';
import ui from 'services/ui.store';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  [backend.reducerPath]: backend.reducer,
  main,
  auth,
  user,
  ui,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = new MiddlewareArray();

if (process.env.NODE_ENV === `development`) {
  middlewares.concat(logger);
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(middlewares)
      .concat(backend.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
