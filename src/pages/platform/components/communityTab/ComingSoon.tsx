import React from 'react';
import styled from '@emotion/styled';
import { title2 } from '@trevari/typo';

const ComingSoon = () => {
  return <Container>서비스 준비중입니다.</Container>;
};

export default ComingSoon;

const Container = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  ${title2}
`;
