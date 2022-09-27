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
  { link: `${endpoints.user_page_url}/blog`, title: '블로그' },
  { link: `${endpoints.user_page_url}/recruit`, title: '트레바리 채용' },
  {
    link: `${endpoints.user_page_url}/blog/show?id=40ef561e-9b31-4a40-882b-02c83cc194c4`,
    title: '파트너 모집',
  },
  { link: `${endpoints.user_page_url}/blog?category=공지`, title: '공지사항' },
];

export const FOOTER_TERMS_NAV: IFooterTermsNav[] = [
  {
    link: `${endpoints.user_page_url}/policy?id=2`,
    title: '이용약관',
  },
  {
    link: `${endpoints.user_page_url}/policy?id=1`,
    title: '개인정보처리방침',
  },
  {
    link: `${endpoints.user_page_url}/policy?id=4c95dc6d-893e-430e-965e-d8a0f1521540`,
    title: '트레바리 운영정책',
  },
  {
    link: `${endpoints.user_page_url}/blog?category=공지`,
    title: '공지사항',
  },
];
