import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { Banner, Post } from 'types/__generate__/user-backend-api';

interface MainState {
  banners: Banner[];
  posts: Post[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: MainState = {
  banners: [],
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
});

export const selectBanners = (state: RootState) => state.main.banners;
export const selectPosts = (state: RootState) => state.main.posts;

export const { setHeroBanners, setMainPosts } = mainSlice.actions;
export default mainSlice.reducer;
