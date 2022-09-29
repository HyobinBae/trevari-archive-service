import { GUEST_TOKEN, IS_PRODUCTION } from 'config';

export const GA_MEASUREMENT_ID = 'UA-118335990-1';

export const GOOGLE_TAG_MANAGER_CONTAINER_ID = 'GTM-MRFBZ44';

interface IGAEvent {
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

export const pageView = (url: string, userID: string) => {
  if (IS_PRODUCTION) {
    const parameters: IParameter = {
      custom_map: {
        dimension1: 'user_id',
      },
      page_location: url,
    };

    if (userID !== GUEST_TOKEN) {
      parameters.user_id = userID;
    }
    // eslint-disable-next-line
    (window as any).ga('config', GA_MEASUREMENT_ID, parameters);
  }
};

const event = ({ action, category, label, value }: IGAEvent) => {
  if (IS_PRODUCTION) {
    // eslint-disable-next-line
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};

export default { event };
