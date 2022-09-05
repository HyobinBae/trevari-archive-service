import React from 'react';
import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import { Footer, FooterLinks, FooterSnsLinks, FooterTerms } from '@trevari/business-components';
import { Container, resetAnchorCss } from '@trevari/components';
import { FacebookCircleIcon, InstagramCircleIcon } from '@trevari/icons';
import { body6 } from '@trevari/typo';

const FooterComp = () => {
  return (
    <Base>
      <Footer
        links={
          <FooterLinks>
            <Anchor onClick={e => e.preventDefault()}>자주 묻는 질문</Anchor>
            <Anchor onClick={e => e.preventDefault()}>문의하기</Anchor>
            <Anchor onClick={e => e.preventDefault()}>블로그</Anchor>
            <Anchor onClick={e => e.preventDefault()}>트레바리 채용</Anchor>
            <Anchor onClick={e => e.preventDefault()}>파트너 모집</Anchor>
            <Anchor onClick={e => e.preventDefault()}>공지사항</Anchor>
          </FooterLinks>
        }
        snsLinks={
          <FooterSnsLinks>
            <IconWrapper>
              <FacebookCircleIcon />
            </IconWrapper>
            <IconWrapper>
              <InstagramCircleIcon />
            </IconWrapper>
          </FooterSnsLinks>
        }
        terms={
          <FooterTerms>
            <Anchor onClick={e => e.preventDefault()}>이용약관</Anchor>
            <Anchor onClick={e => e.preventDefault()}>개인정보처리방침</Anchor>
            <Anchor onClick={e => e.preventDefault()}>트레바리 운영정책</Anchor>
            <Anchor onClick={e => e.preventDefault()}>공지사항</Anchor>
          </FooterTerms>
        }
      />

      <Global
        styles={css`
          body {
            padding: 0 !important;
          }
        `}
      ></Global>
    </Base>
  );
};

export default FooterComp;

const Base = styled.div`
  padding: 1.5rem 0 2.5rem;
`;
const Anchor = styled.a(resetAnchorCss, {
  font: 'inherit',
  color: 'currentColor',
  display: 'block',
  cursor: 'pointer',
});
const GuideText = styled.p`
  ${body6};
  margin-bottom: 1rem;
`;
const IconWrapper = styled(Anchor)`
  width: 2.25rem;
  height: 2.25rem;
  ${({ theme }) => theme.breakPoint.mobile} {
    width: 1.75rem;
    height: 1.75rem;
  }
  svg {
    width: 100%;
    height: 100%;
  }
`;
