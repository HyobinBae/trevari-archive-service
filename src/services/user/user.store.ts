import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClubRole, User } from 'types/__generate__/user-backend-api';
import { RootState } from 'services/store';
import { getClubRoles, getUser } from 'services/user/user.api';

interface UserState {
  user: User;
  roles: ClubRole[];
  currentRole: string;
  hasPartnerMembership: boolean;
}

const initialState: UserState = {
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
  roles: [],
  currentRole: '',
  hasPartnerMembership: false,
};

export const userStore = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload: { user } }: PayloadAction<{ user: User }>) => {
      state.user = user;
    },
    logout: () => initialState,
  },
  extraReducers: builder => {
    builder.addMatcher(getUser.matchFulfilled, (state, { payload }) => {
      state.user = payload;
    });
    builder.addMatcher(getClubRoles.matchFulfilled, (state, { payload }) => {
      const partnerClubRoles = payload && payload.length > 0 ? payload.filter(cr => cr.role === 'Partner') : [];
      const hasPartnerMembership = partnerClubRoles.length > 0;
      state.roles = payload;
      state.hasPartnerMembership = hasPartnerMembership;
      if (hasPartnerMembership) {
        state.currentRole = 'Partner';
      }
    });
  },
});

export const selectUser = (state: RootState) => state.user.user;
export const selectHasPartnerMembership = (state: RootState) => state.user.hasPartnerMembership;
export const { setUser, logout } = userStore.actions;

export default userStore.reducer;
