import { IS_PRODUCTION } from 'config';

const PIXEL_ID = '1523707084607769';

const pageView = () => {
  event('PageView');
};

const viewContent = (contentID: string, contentName: string, price: number, eventID: string) => {
  const params = {
    content_ids: [contentID],
    content_name: contentName,
    content_type: 'product',
    currency: 'KRW',
    value: price,
  };
  event('ViewContent', params, eventID);
};

const initiateCheckout = (contentID: string, price: number, eventID: string) => {
  const params = {
    content_ids: [contentID],
    content_type: 'product',
    currency: 'KRW',
    value: price,
  };
  event('InitiateCheckout', params, eventID);
};

// eslint-disable-next-line
const event = (eventAction: string, params?: any, eventID?: string) => {
  if (IS_PRODUCTION) {
    // eslint-disable-next-line
    (window as any).fbq('trackSingle', PIXEL_ID, eventAction, params, { eventID });
  }
};

export default {
  initiateCheckout,
  pageView,
  viewContent,
};
export { PIXEL_ID };
