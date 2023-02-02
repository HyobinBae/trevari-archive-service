import { createSlice } from '@reduxjs/toolkit';
import { getLiveDate, getLiveLink, getMagazine, getPlatform, getReplay } from '../../../api/backend';
import { RootState } from '../../../services/store';
import { LiveDate, LiveLink, MagazineListProps, PlatformProps, ReplayListProps } from './platform.types';

interface PlatformState {
  platform?: PlatformProps[]
  replay?: ReplayListProps[]
  magazine?: MagazineListProps[]
  getNavTitle: string
  getVodSrc: string
  getPdfSrc: string
  getPdfTitle: string
  getVodTitle: string
  getSearchParams: string
  getPlatformParams: string
  liveDate?: LiveDate[]
  liveLink?: LiveLink[]
  isLiveModal?: boolean
}

const initialState: PlatformState = {
  platform: [],
  replay: [],
  magazine: [],
  getNavTitle: '',
  getVodSrc: '',
  getPdfSrc: '',
  getPdfTitle:'',
  getVodTitle: '',
  getSearchParams: 'name=replay',
  getPlatformParams: '',
  liveDate: [],
  liveLink: [],
  isLiveModal: false
}



export const platformStore = createSlice({
  name: 'platform',
  initialState,
  reducers: {
    setNavTitle: (state, action) => {
      state.getNavTitle = action.payload
    },
    setVodSrc: (state, action) => {
      state.getVodSrc = action.payload
    },
    setPdfSrc: (state,action) => {
      state.getPdfSrc = action.payload
    },
    setPdfTitle: (state,action) => {
      state.getPdfTitle = action.payload
    },
    setVodTitle: (state, action) => {
      state.getVodTitle = action.payload
    },
    setSearchParams: (state,action) => {
      state.getSearchParams = action.payload
    },
    setPlatformParams: (state,action) => {
      state.getPlatformParams = action.payload
    },
    setIsLiveModal: (state,action) => {
      state.isLiveModal = action.payload
    },
  },
  extraReducers:
    builder => {
      builder.addMatcher(getReplay.matchFulfilled, (state, { payload }) => {
        state.replay = payload;
      });
      builder.addMatcher(getMagazine.matchFulfilled, (state, { payload }) => {
        state.magazine = payload;
      });
      builder.addMatcher((getPlatform.matchFulfilled), (state, { payload }) => {
        state.platform = payload;
      })
      builder.addMatcher((getLiveDate.matchFulfilled),(state,{ payload }) => {
        state.liveDate = payload;
      })
      builder.addMatcher((getLiveLink.matchFulfilled),(state, { payload }) => {
        state.liveLink = payload;
      })
    },
})



export const selectReplayList = (state: RootState) => state.platform.replay;
export const selectMagazineList = (state: RootState) => state.platform.magazine;
export const selectPlatform = (state:RootState) => state.platform.platform;
export const selectLiveDate = (state:RootState) => state.platform.liveDate;
export const selectLiveLink = (state:RootState) => state.platform.liveLink;
export const { setNavTitle, setVodSrc, setPdfSrc, setPdfTitle, setVodTitle, setSearchParams, setPlatformParams, setIsLiveModal } = platformStore.actions;
export default platformStore.reducer