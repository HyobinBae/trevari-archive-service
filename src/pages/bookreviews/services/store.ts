import { deleteBookreview } from 'pages/bookreviews/services/api';
import { createSlice } from '@reduxjs/toolkit';
import { Bookreview } from 'types/__generate__/user-backend-api';
import { getBookreview, getBookreviews } from './api';

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
  name: 'bookreview',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(getBookreview.matchFulfilled, (state, { payload }) => {
      state.bookreview = payload;
    });
    builder.addMatcher(getBookreviews.matchFulfilled, (state, { payload }) => {
      state.bookreviews = payload;
    });
    builder.addMatcher(deleteBookreview.matchFulfilled, (state, { payload }) => {
      state.bookreview = {} as Bookreview;
    });
  },
});

export const setBookreivew = state => state.bookreview.bookreview;
export const setBookreivews = state => state.bookreview.bookreviews;

export default bookreviewStore.reducer;
