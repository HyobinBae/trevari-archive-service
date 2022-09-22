import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'types/__generate__/user-backend-api';
import { getUser } from 'api/backend';

interface UserState {
  me: any;
  user: User;
}

const initialState: UserState = {
  me: {},
  user: {
    ads: [],
    appleID: '',
    birthday: '',
    comment: '',
    countryCode: '',
    createdAt: '',
    description: '',
    email: '',
    facebook: '',
    facebookID: '',
    gender: '',
    hasAuthenticatedPhoneNumber: false,
    id: '',
    instagram: '',
    interests: [],
    isAgreedToAllMarketing: false,
    isAgreedToMarketingSms: false,
    isBlocked: false,
    isInactivated: false,
    isPublicAge: false,
    isPublicBookreview: false,
    isPublicClubActivity: false,
    isPublicGender: false,
    isPublicProfile: false,
    kakaoID: '',
    keywords: [],
    marketingAgreedAt: '',
    name: '',
    noExchangeablePoint: 0,
    password: '',
    phoneNumber: '',
    point: 0,
    profileImageUrl: '',
    readingVolume: 0,
    recentLoginedAt: '',
    recommender: '',
    route: '',
    updatedAt: '',
  },
};

export const userStore = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload: { user } }: PayloadAction<{ user: User }>) => {
      state.user = user;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(getUser.matchFulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
});

export const { setUser } = userStore.actions;

export default userStore.reducer;
