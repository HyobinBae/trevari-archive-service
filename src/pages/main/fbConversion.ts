import { v4 as uuid } from 'uuid';

const getUniqueEventId = (): string => {
  const unixTime = new Date().getTime();
  return unixTime + uuid().replace(/-/g, '');
};

const getCookie = (name: string): string | undefined => {
  const matches = document.cookie.match(
    // eslint-disable-next-line
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'),
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

const convertCookieToObject = (text: string): object | undefined => {
  if (!text) {
    return;
  }
  const obj = text.split(';').reduce((res, c) => {
    const [key, val] = c.trim().split('=').map(decodeURIComponent);
    try {
      return Object.assign(res, { [key]: JSON.parse(val) });
    } catch (e) {
      return Object.assign(res, { [key]: val });
    }
  }, {});
  return obj;
};

export { getUniqueEventId, getCookie, convertCookieToObject };
