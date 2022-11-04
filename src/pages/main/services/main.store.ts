import { createSlice } from '@reduxjs/toolkit';
import { filter, orderBy } from 'lodash';
import { MAT_890_TAG_ID } from 'pages/main/const';
import {
  createWishClub,
  deleteWishClub,
  getBanners,
  getCurationDisplayOrders,
  getCurations,
  getPosts,
  getScheduledClubs,
  getWishClubs,
} from 'pages/main/services/main.api';
import { RootState } from 'services/store';
import { Banner, Club, Post, WishClub } from 'types/__generate__/user-backend-api';
import { IClub, ICuration } from 'pages/main/services/main.types';
interface MainState {
  banners: Banner[];
  tagOrders: string[];
  newbieTagOrder: string[];
  wishClubs: WishClub[];
  scheduledClubs: Club[],
  curations: ICuration[];
  posts: Post[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: MainState = {
  banners: [],
  tagOrders: [],
  newbieTagOrder: [],
  wishClubs: [],
  scheduledClubs: [],
  curations: [],
  posts: [],
  status: 'failed',
};

// TODO -> wishClubs 이중 맵 도는거 한개의 리듀서에서 해결할 수 있도록 리팩토링;
export const mainStore = createSlice({
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
    builder.addMatcher(getWishClubs.matchFulfilled, (state, { payload }) => {
      state.wishClubs = payload;
      if (state.curations.length > 0) {
        const wishClubIDs = payload.map(({ clubID }) => clubID);
        const clubsWithBookmark = state.curations.map(({ clubs, tag }) => {
          return {
            clubs: clubs?.map(club => {
              return wishClubIDs.includes(club?.id) ? { ...club, isBookmark: true } : { ...club, isBookmark: false };
            }),
            tag,
          };
        });
        state.curations = clubsWithBookmark;
      }
    });

    builder.addMatcher(getScheduledClubs.matchFulfilled, (state, { payload }) => {
      state.scheduledClubs = payload;
    });
    builder.addMatcher(getCurationDisplayOrders.matchFulfilled, (state, { payload }) => {
      state.tagOrders = orderBy(payload, ['order'], ['asc']).map(({ itemID }) => itemID).filter(tagID => tagID !== MAT_890_TAG_ID);
      state.newbieTagOrder = payload.map(({ itemID }) => itemID);
    });
    builder.addMatcher(getCurations.matchFulfilled, (state, { payload }) => {
      if (state.wishClubs.length > 0) {
        const canDisplayClubs = filter(payload, ({ clubs }: { clubs: IClub[] }) => clubs.length > 0);
        const wishClubIDs = state.wishClubs.map(({ clubID }) => clubID);
        const clubsWithBookmark: ICuration[] = canDisplayClubs.map(({ clubs, tag }) => {
          return {
            clubs: clubs?.map((club: IClub) => {
              return wishClubIDs.includes(club?.id) ? { ...club, isBookmark: true } : { ...club, isBookmark: false };
            }),
            tag,
          };
        });
        state.curations = clubsWithBookmark;
      } else {
        const canDisplayClubs = filter(payload, ({ clubs }: { clubs: IClub[] }) => clubs.length > 0);
        const clubsWithBookmark: ICuration[] = canDisplayClubs.map(({ clubs, tag }) => {
          return { clubs: clubs?.map((club: IClub) => ({ ...club, isBookmark: false })), tag };
        });
        state.curations = clubsWithBookmark;
      }
    });
    builder.addMatcher(createWishClub.matchFulfilled, (state, { payload }) => {
      const wishClub = payload.wishClub;
      state.wishClubs = [...state.wishClubs].concat(wishClub as WishClub);
    });
    builder.addMatcher(deleteWishClub.matchFulfilled, (state, action) => {
      const {
        meta: {
          arg: {
            originalArgs: { clubID },
          },
        },
      } = action;
      state.wishClubs = state.wishClubs.filter(wishClub => wishClub.clubID !== clubID);
    });
  },
});

export const selectBanners = (state: RootState) => state.main.banners.filter(({ isClosed }) => isClosed === false);
export const selectPosts = (state: RootState) => state.main.posts;
export const selectTagOrders = (state: RootState) => state.main.tagOrders;
export const selectWishClubs = (state: RootState) => state.main.wishClubs;
export const selectScheduledClubs = (state: RootState) => state.main.scheduledClubs;
export const selectWishClubIds = (state: RootState) => state.main.wishClubs.map(({ clubID }) => clubID);
export const selectDisplayCurations = (state: RootState) => state.main.curations;

export default mainStore.reducer;
