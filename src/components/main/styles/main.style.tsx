import styled from '@emotion/styled';
import { body7 } from '@trevari/typo';

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
  height: 540px;
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

export const BlogListWrap = styled.div`
  padding: 54px 0 80px;
  ${({ theme }) => theme.breakPoint.mobile} {
    padding: 20px 0;
  }
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
