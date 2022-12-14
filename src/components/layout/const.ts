import { endpoints } from 'config';

export interface IFooterNav {
  link: string;
  title: string;
}

export interface IFooterTermsNav {
  link: string;
  title: string;
}

export const FOOTER_NAVS: IFooterNav[] = [
  { link: `${endpoints.user_page_url}/cs`, title: '자주 묻는 질문' },
  { link: `${endpoints.user_page_url}/cs?tab=question`, title: '문의하기' },
  { link: `${endpoints.user_page_url}/recruit`, title: '트레바리 채용' },
];

export const FOOTER_TERMS_NAV: IFooterTermsNav[] = [
  {
    link: `${endpoints.user_page_url}/policy?id=2`,
    title: '이용약관',
  },
  {
    link: `${endpoints.user_page_url}/policy?id=1`,
    title: '개인정보 처리 방침',
  },
  {
    link: `${endpoints.user_page_url}/policy?id=4c95dc6d-893e-430e-965e-d8a0f1521540`,
    title: '운영정책',
  },
  {
    link: 'https://www.instagram.com/trevari_official/',
    title: '인스타그램',
  },
];
