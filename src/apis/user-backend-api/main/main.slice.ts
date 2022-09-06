import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'store';
import { Banner, ClubsWithTag, DisplayOrder, Post } from 'types/__generate__/user-backend-api';
import { mainApi } from 'apis/user-backend-api/main';

interface MainState {
  banners: Banner[];
  curationOrders: DisplayOrder[];
  curations: ClubsWithTag[];
  posts: Post[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: MainState = {
  banners: [],
  curationOrders: [],
  curations: [],
  posts: [],
  status: 'failed',
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setHeroBanners: (state, action: PayloadAction<Banner[]>) => {
      return {
        ...state,
        banners: action.payload,
      };
    },
    setMainPosts: (state, action: PayloadAction<Post[]>) => {
      return {
        ...state,
        posts: action.payload,
      };
    },
  },
  extraReducers: builder => {
    builder.addMatcher(mainApi.endpoints.getCurationDisplayOrders.matchFulfilled, (state, { payload }) => {
      return {
        ...state,
        curationOrders: payload,
      };
    });
  },
});

export const selectBanners = (state: RootState) => state.main.banners;
export const selectPosts = (state: RootState) => state.main.posts;

export const { setHeroBanners, setMainPosts } = mainSlice.actions;
export default mainSlice.reducer;
