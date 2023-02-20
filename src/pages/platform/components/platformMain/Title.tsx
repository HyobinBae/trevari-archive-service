import React from 'react';
import styled from '@emotion/styled';
import { heading10 } from '@trevari/typo';
import { PlatformProps } from 'pages/platform/services/platform.types';

const Title = ({ club_title }: PlatformProps) => {
  return <Text>{club_title}</Text>;
};

export default Title;

const Text = styled.div`
  display: flex;
  justify-content: flex-start;

  width: 100%;
  height: 27px;
  padding: 0 20px;
  margin-bottom: 5px;

  ${heading10};

  color: #ffffff;
`;
