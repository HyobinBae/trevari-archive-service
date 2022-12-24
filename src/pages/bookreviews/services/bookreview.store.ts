import { RootState } from 'services/store';
import { deleteBookreview } from 'pages/bookreviews/services/api';
import { createSlice } from '@reduxjs/toolkit';
import { Bookreview } from 'types/__generate__/user-backend-api';
import { getBookreview, getBookreviews } from './api';
import { IBookreviews } from './types';

interface IBookreviewsWithLoading extends IBookreviews {
  loading: boolean;
}
interface BookreviewState {
  bookreview: Bookreview;
  bookreviews: IBookreviewsWithLoading;
  comments: Comment[];
}
const initialState: BookreviewState = {
  bookreview: {} as Bookreview,
  bookreviews: {
    count: 0,
    bookreviews: [],
    loading: true,
  },
  comments: [],
};

export const bookreview = createSlice({
  name: 'bookreview',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(getBookreview.matchFulfilled, (state, { payload }) => {
      state.bookreview = payload;
    });
    builder.addMatcher(getBookreviews.matchFulfilled, (state, { payload }) => {
      state.bookreviews = {
        ...payload,
        loading: false,
      };
    });
    builder.addMatcher(deleteBookreview.matchFulfilled, (state, { meta }) => {
      const {
        arg: {
          originalArgs: { id },
        },
      } = meta;
      state.bookreviews = {
        count: state.bookreviews.count - 1,
        bookreviews: state.bookreviews.bookreviews.filter(bookreview => bookreview.id !== id),
        loading: false,
      };
    });
  },
});

export const selectBookreivews = (state: RootState) => state.bookreview.bookreviews;

export default bookreview.reducer;
