import { createSlice } from '@reduxjs/toolkit';

import { RootState } from 'store';
import { Banner, ClubsWithTag, Post } from 'types/__generate__/user-backend-api';
import { getBanners, getCurationDisplayOrders, getCurations, getPosts } from 'pages/main/api';
import { MAT_890_TAG_ID } from 'pages/main/const';

interface MainState {
  banners: Banner[];
  tagOrders: string[];
  newbieTagOrder: string[];
  curations: ClubsWithTag[];
  posts: Post[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: MainState = {
  banners: [],
  tagOrders: [],
  newbieTagOrder: [],
  curations: [],
  posts: [],
  status: 'failed',
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(getBanners.matchFulfilled, (state, { payload }) => {
      state.banners = payload;
    });
    builder.addMatcher(getPosts.matchFulfilled, (state, { payload }) => {
      state.posts = payload;
    });
    builder.addMatcher(getCurationDisplayOrders.matchFulfilled, (state, { payload }) => {
      state.tagOrders = payload.map(({ itemID }) => itemID).filter(tagID => tagID !== MAT_890_TAG_ID);
      state.newbieTagOrder = payload.map(({ itemID }) => itemID);
    });
    builder.addMatcher(getCurations.matchFulfilled, (state, { payload }) => {
      state.curations = payload;
    });
  },
});

export const selectBanners = (state: RootState) => state.main.banners;
export const selectPosts = (state: RootState) => state.main.posts;
export const selectTagOrders = (state: RootState) => state.main.tagOrders;
export const selectCurations = (state: RootState) => state.main.curations;

export default mainSlice.reducer;
