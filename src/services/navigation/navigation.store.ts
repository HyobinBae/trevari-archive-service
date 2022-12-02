import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface NavigationState {
  location: string;
}

const initialState: NavigationState = {
  location: '/',
};

export const navigationStore = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setNavigationLocation: (state, { payload }) => {
      state.location = payload;
    },
  },
});

export const selectNavigationLocation = (state: RootState) => state.navigation.location;
export const { setNavigationLocation } = navigationStore.actions;

export default navigationStore.reducer;

