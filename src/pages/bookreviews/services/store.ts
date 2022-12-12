import { createSlice } from '@reduxjs/toolkit';
import { Bookreview } from 'types/__generate__/user-backend-api';
import { getBookreview } from './api';

interface BookreviewState {
  bookreview: Bookreview;
  bookreviews: Bookreview[];
  comments: Comment[];
}
const initialState: BookreviewState = {
  bookreview: {} as Bookreview,
  bookreviews: [],
  comments: [],
};

export const bookreviewStore = createSlice({
  name: 'bookreivew',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(getBookreview.matchFulfilled, (state, { payload }) => {
      state.bookreview = payload;
    });
  },
});

export const setBookreivew = state => state.bookreview.bookreview;

export default bookreviewStore.reducer;
