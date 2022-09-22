import styled from '@emotion/styled';
import { body6, body7, body8, heading8, title2 } from '@trevari/typo';

export const Base = styled.div`
  width: 100%;
  height: 100%;
`;

export const GradiantWrap = styled.div`
  position: relative;
`;

export const ImgLinkWrap = styled.a`
  ${({ theme }) => theme.breakPoint.mobile} {
    display: block;
    height: auto;
    width: 100%;
    object-fit: cover;
  }
  position: relative;
  height: auto;
  width: 100%;
`;

export const SwiperImg = styled.img`
  width: 100%;
`;

export const Gradation = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 10;
  width: 100%;
  height: 173px;
  background: linear-gradient(360deg, rgba(0, 0, 0, 0.2) 58.76%, rgba(0, 0, 0, 0) 100%);
`;

export const PostListWrap = styled.div<{ show: boolean }>`
  ${({ theme, show }) =>
    show
      ? `
  padding: 54px 0 80px;
  ${theme.breakPoint.mobile} {
    padding: 20px 0;
  }`
      : `
  display: none;
  `}
`;

export const LayerSmallText = styled.div`
  ${body7};
  color: ${({ theme }) => theme.colors.gray600};
  margin-top: 16px;
`;

export const BlogListBody = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 24px;
  padding: 0 20px;
`;

export const NoticeListBody = styled.div`
  ${({ theme }) => theme.breakPoint.mobile} {
    padding: 0 20px;
  }
  ${({ theme }) => theme.breakPoint.desktop} {
    display: grid;
    display: -ms-grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    row-gap: 24px;
  } ;
`;

export const NoticeItems = styled.div`
  ${({ theme }) => theme.breakPoint.mobile} {
    height: auto;
    width: 100%;
    padding: 10px 0 5px 0;
  }
  display: flex;
  justify-content: space-between;
  height: auto;
  margin: 0 0 24px;
  align-items: center;
  border-bottom: 1px solid #ecece9;
  cursor: pointer;
`;

export const NoticeContents = styled.div`
  ${({ theme }) => theme.breakPoint.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 0;
  }
  max-width: 414px;
  width: 100%;
  padding: 0 0 12px;
`;

export const TextOverflowForDescription = styled.p`
  display: -webkit-box;
  white-space: normal;
  word-wrap: break-word;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  ${body6};
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  margin: 0 0 10px;
`;

export const TextOverflowForTitle = styled.p`
  display: -webkit-box;
  white-space: normal;
  word-wrap: break-word;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  ${title2};
  max-width: 424px;
  width: 100%;
  margin: 0 0 3px;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.breakPoint.mobile} {
    max-width: 286px;
    width: 100%;
    height: 100%;
  } ;
`;

export const DateFormat = styled.p`
  line-height: 12px;
  ${body8};
  color: ${({ theme }) => theme.colors.gray600};
  margin-top: 13px;
  ${({ theme }) => theme.breakPoint.mobile} {
    color: ${({ theme }) => theme.colors.gray500};
    margin-top: 8px;
  } ;
`;

export const CurationsContainer = styled.div`
  height: auto;
  padding: 0 0 78px;
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 16px 20px;
  margin: 24px 0 0 0;
  background: ${({ theme }) => theme.colors.white};
`;

export const ListTitleWrapper = styled.div`
  ${heading8};
`;

export const MoreText = styled.span`
  ${body8};
  margin: 5px 0;
  cursor: pointer;
`;

export const ClickMore = styled.a`
  color: ${({ theme }) => theme.colors.gray500};
`;
