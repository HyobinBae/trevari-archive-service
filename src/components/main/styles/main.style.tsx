import styled from '@emotion/styled';

export const Base = styled.div`
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
