export interface IFooterNav {
  link: string;
  title: string;
}

export interface IFooterTermsNav {
  link: string;
  title: string;
}

export const FOOTER_NAVS: IFooterNav[] = [
  { link: 'https://trevari.co.kr/cs', title: '자주 묻는 질문' },
  { link: 'https://trevari.co.kr/cs?tab=question', title: '문의하기' },
  { link: 'https://trevari.co.kr/blog', title: '블로그' },
  { link: 'https://trevari.co.kr/recruit', title: '트레바리 채용' },
  {
    link: 'https://trevari.co.kr/blog/show?id=40ef561e-9b31-4a40-882b-02c83cc194c4',
    title: '파트너 모집',
  },
  { link: '/blog?category=공지', title: '공지사항' },
];

export const FOOTER_TERMS_NAV: IFooterTermsNav[] = [
  {
    link: 'https://trevari.co.kr/policy?id=2',
    title: '이용약관',
  },
  {
    link: 'https://trevari.co.kr/policy?id=1',
    title: '개인정보처리방침',
  },
  {
    link: 'https://trevari.co.kr/policy?id=4c95dc6d-893e-430e-965e-d8a0f1521540',
    title: '트레바리 운영정책',
  },
  {
    link: 'https://trevari.co.kr/blog?category=공지',
    title: '공지사항',
  },
];
