import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';

import { backend } from 'api';
import { heading5 } from '@trevari/typo';
import Layout from 'components/layout';

function Main() {
  const { data, isFetched } = useQuery(['banners'], backend.getBanners);

  return (
    <Layout>
      <Base>
        <Title>메인페이지</Title>
        {isFetched &&
          data.banners.map((d: any) => {
            return <div key={d.id}>{d.id}</div>;
          })}
      </Base>
    </Layout>
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
