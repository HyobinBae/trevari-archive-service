import { configureStore, combineReducers, ThunkAction, Action, MiddlewareArray } from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import storage from 'redux-persist/lib/storage';
import { createLogger } from 'redux-logger';

import { IS_PRODUCTION } from 'config';
import { backend } from 'api/backend';
import main from 'pages/main/services/main.store';
import auth from 'services/auth/auth.store';
import user from 'services/user/user.store';
import ui from 'services/ui.store';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  [backend.reducerPath]: backend.reducer,
  main,
  auth,
  user,
  ui,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [...new MiddlewareArray<Middleware[]>()];

if (!IS_PRODUCTION) {
  middlewares.push(createLogger());
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
  devTools: !IS_PRODUCTION,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
