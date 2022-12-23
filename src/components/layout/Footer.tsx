import React from 'react';
import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import { Footer, FooterLinks, FooterTerms } from '@trevari/business-components';
import { resetAnchorCss } from '@trevari/components';

import { FOOTER_NAVS, FOOTER_TERMS_NAV } from 'components/layout/const';

const FooterComp = () => {
  return (
    <Base>
      <Footer
        links={
          <FooterLinks>
            {FOOTER_NAVS.map(nav => (
              <Anchor href={nav.link} key={nav.title}>
                {nav.title}
              </Anchor>
            ))}
          </FooterLinks>
        }
        terms={
          <CustomFooterTerms>
            {FOOTER_TERMS_NAV.map(nav => (
              <Anchor href={nav.link} key={nav.title}>
                {nav.title}
              </Anchor>
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
  display: 'block',
  cursor: 'pointer',
  color: '#4e4e4c',
});

const CustomFooterTerms = styled(FooterTerms)`
  .trevari-footer-terms-item {
    list-style: none;
  }
`;
