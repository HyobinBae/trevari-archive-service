import React from 'react';
import styled from '@emotion/styled';
import { body8 } from '@trevari/typo';
import { PlatformProps } from 'pages/platform/services/platform.types';

const SubTitle = ({ sub_title }: PlatformProps) => {
  return <Text>{sub_title}</Text>;
};

export default SubTitle;

const Text = styled.div`
  display: flex;
  justify-content: flex-start;

  width: 100%;
  height: 18px;
  padding: 0 20px;

  ${body8};

  color: #adadaa;
  background: #222222;
`;
