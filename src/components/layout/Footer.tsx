import React from 'react';
import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import { Footer, FooterLinks, FooterSnsLinks, FooterTerms } from '@trevari/business-components';
import { resetAnchorCss } from '@trevari/components';
import { FacebookCircleIcon, InstagramCircleIcon } from '@trevari/icons';

import { FOOTER_NAVS, FOOTER_TERMS_NAV } from 'components/layout/const';

const FooterComp = () => {
  const onClickMoveTo = (snsName: string) => () => {
    switch (snsName) {
      case '페이스북': {
        window.open('https://www.facebook.com/trevari/');
        break;
      }

      case '인스타그램': {
        window.open('https://www.instagram.com/trevari_official/');
        break;
      }

      case '네이버 블로그': {
        window.open('https://blog.naver.com/trevarivari');
        break;
      }
    }
  };

  return (
    <Base>
      <Footer
        links={
          <FooterLinks>
            {FOOTER_NAVS.map(nav => (
              <CustomATag href={nav.link} key={nav.title}>
                <Anchor>{nav.title}</Anchor>
              </CustomATag>
            ))}
          </FooterLinks>
        }
        snsLinks={
          <CustomFooterSnsLinks>
            <IconWrapper>
              <FacebookCircleIcon onClick={onClickMoveTo('페이스북')} />
            </IconWrapper>
            <IconWrapper>
              <InstagramCircleIcon onClick={onClickMoveTo('인스타그램')} />
            </IconWrapper>
          </CustomFooterSnsLinks>
        }
        terms={
          <CustomFooterTerms>
            {FOOTER_TERMS_NAV.map(nav => (
              <FooterLink href={nav.link} key={nav.title}>
                <Anchor>{nav.title}</Anchor>
              </FooterLink>
            ))}
          </CustomFooterTerms>
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

const CustomATag = styled.a`
  color: ${({ theme }) => theme.colors.gray800};
  &:hover {
    color: ${({ theme }) => theme.colors.gray800};
  }
`;

const CustomFooterSnsLinks = styled(FooterSnsLinks)`
  .trevari-footer-sns-links-item {
    list-style: none;
  }
`;

const CustomFooterTerms = styled(FooterTerms)`
  .trevari-footer-terms-item {
    list-style: none;
  }
`;

const FooterLink = styled.a`
  color: #4e4e4c;
`;
