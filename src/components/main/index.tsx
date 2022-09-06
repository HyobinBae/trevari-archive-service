import styled from '@emotion/styled';
import { heading5 } from '@trevari/typo';

import FooterComp from 'components/layout/Footer';
import HeroSlider from 'components/main/HeroSlider';

function Main() {
  return (
    <>
      <HeroSlider />
      <Blogs />
      <FooterComp />
    </>
  );
}

export default Main;

const Base = styled.div`
  width: 100%;
  height: 100%;
`;
const Title = styled.h6`
  ${heading5};
  width: 100%;
  text-align: center;
`;

const Blogs = styled.div`
  padding: 54px 0 80px;
  ${({ theme }) => theme.breakPoint.mobile} {
    padding: 20px 0;
  }
`;
