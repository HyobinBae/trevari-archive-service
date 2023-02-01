import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
  MiddlewareArray,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import { Middleware } from 'redux';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import storage from 'redux-persist/lib/storage';
import { createLogger } from 'redux-logger';

import { IS_PRODUCTION } from 'config';
import { PlatformGetApi } from 'api/backend';
import { backend, bookreviewBackend } from 'api/backend';
import main from 'pages/main/services/main.store';
import auth from 'services/auth/auth.store';
import user from 'services/user/user.store';
import ui from 'services/ui.store';
import bookreview from 'pages/bookreviews/services/bookreview.store';
import navigation from 'services/navigation/navigation.store';
import platform from 'pages/platform/services/platform.store'


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  [backend.reducerPath]: backend.reducer,
  [bookreviewBackend.reducerPath]: bookreviewBackend.reducer,
  [PlatformGetApi.reducerPath]: PlatformGetApi.reducer,
  main,
  auth,
  user,
  ui,
  navigation,
  bookreview,
  platform
});



const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares: Middleware[] = [...new MiddlewareArray<Middleware[]>()];

if (!IS_PRODUCTION) {
  middlewares.push(createLogger());
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    ...middlewares,
    backend.middleware,
    bookreviewBackend.middleware,
    PlatformGetApi.middleware

  ],
  devTools: !IS_PRODUCTION,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
