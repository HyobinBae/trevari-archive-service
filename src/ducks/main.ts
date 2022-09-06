import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { Banner } from 'types/__generate__/user-backend-api';

interface MainState {
  banners: Banner[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: MainState = {
  banners: [],
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
  },
});

export const selectBanners = (state: RootState) => state.main.banners;

export const { setHeroBanners } = mainSlice.actions;
export default mainSlice.reducer;
