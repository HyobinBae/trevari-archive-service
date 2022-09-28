import React from 'react';
import { PIXEL_ID } from 'pages/main/pixel';
import { endpoints, IS_PRODUCTION } from 'config';
import { Helmet } from 'react-helmet-async';
import { getUniqueEventId } from 'pages/main/fbConversion';
import { GA_MEASUREMENT_ID } from 'pages/main/ga';

const MainHelmet = () => {
  const pageViewEventID = getUniqueEventId();

  return (
    <Helmet>
      <title>트레바리 - 읽고, 쓰고, 대화하고, 친해져요!</title>
      <meta
        name="description"
        content="6만 명이 선택한 독서모임 커뮤니티. 한 달에 한 권 읽고, 글을 쓰고, 사람들을 만나 대화하며 친해집니다."
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="트레바리 - 읽고, 쓰고, 대화하고, 친해져요!" />
      <meta
        property="og:description"
        content="6만 명이 선택한 독서모임 커뮤니티. 한 달에 한 권 읽고, 글을 쓰고, 사람들을 만나 대화하며 친해집니다."
      />
      <meta property="og:image" content={`${endpoints.cloudfront_uri}/static/210818_default_thumbnail.png`} />
      <meta property="og:url" content="https://trevari.co.kr" />

      {/* Anti-flicker snippet (recommended) */}
      {IS_PRODUCTION && (
        <>
          <style
            dangerouslySetInnerHTML={{
              __html: `
                  .async-hide { opacity: 0 !important}
                `,
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                  (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
                  h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
                  (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
                  })(window,document.documentElement,'async-hide','dataLayer',4000,
                  {'GTM-NTRCCNC':true});
                `,
            }}
          />
        </>
      )}

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {IS_PRODUCTION && (
        <>
          <script async={true} src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', { 'optimize_id': 'GTM-NTRCCNC'});
                gtag('config', 'AW-829304701');`,
            }}
          />
        </>
      )}

      {/* Facebook Pixel Code */}
      {IS_PRODUCTION && (
        <div>
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView', null, { event_id: '${pageViewEventID}' });
            `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
        </div>
      )}

      {/* Naver search data */}
      {/* <span itemScope="" itemType="http://schema.org/Organization">
        <link itemProp="url" href="https://m.trevari.co.kr" />
        <a itemProp="sameAs" href="https://www.facebook.com/trevari" />
        <a itemProp="sameAs" href="https://www.instagram.com/trevari_official" />
      </span> */}
    </Helmet>
  );
};

export default MainHelmet;
