import { createSlice } from '@reduxjs/toolkit';
import { IS_PRODUCTION } from 'config';
import { GA_MEASUREMENT_ID } from 'pages/main/ga';
import {
  pageView as fbConversinPageView,
} from 'services/analytics/analytics.api';

interface IGAEventPayload {
  action: string;
  category: string;
  label: string;
  // eslint-disable-next-line
  value?: any;
}

interface IParameter {
  custom_map?: {
    dimension1: string;
  };
  page_location: string;
  user_id?: string;
}

const initialState = {};

export const analytics = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    pageView: (_, {payload})=> {
      if (IS_PRODUCTION) {
        const parameters: IParameter = {
          custom_map: {
            dimension1: 'user_id',
          },
          page_location: 'https://m.trevari.co.kr',
          user_id: payload
        };
        //eslint-disable-next-line
        (window as any).gtag('config', GA_MEASUREMENT_ID, parameters);
      }
    },
    gaEvent: (_, { payload } : { payload :IGAEventPayload }) => {
      const {action, category, label, value} = payload;
      if (IS_PRODUCTION) {
        // eslint-disable-next-line
        (window as any).gtag('event', action, {
          event_category: category,
          event_label: label,
          value,
        });
      }
    },
  },
  extraReducers: builder => {
    builder.addMatcher(fbConversinPageView.matchFulfilled, (state, {payload}) => {
      console.log(payload);
    })
  }
});

export const { pageView, gaEvent } = analytics.actions;

export default analytics.reducer;
