import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import Title from './Title';
import SubTitle from './SubTitle';
import CloseButtonContainer from './CloseButtonContainer';
import { useAppDispatch, useAppSelector } from '../../../../services/store';
import { selectPlatform, setPlatformParams } from '../../services/platform.store';
import { getPlatform } from '../../../../api/backend';
import { PlatformProps } from '../../services/platform.types';
import { useParams } from 'react-router-dom';

const initialState: PlatformProps[] = [
  {
    club_title: '',
    sub_title: '',
  },
];

const PlatformHeader = () => {
  const { platformID } = useParams();
  const platformTitle = useAppSelector(selectPlatform);
  const subTitle = useAppSelector(state => state.platform.getVodTitle);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPlatform.initiate({ platformID, initialState }));
    dispatch(setPlatformParams(platformID));
  });

  return (
    <Header>
      <CloseButtonContainer />
      <Title club_title={platformTitle?.club_title} />
      {!subTitle ? <SubTitle sub_title={platformTitle?.sub_title} /> : <SubTitle sub_title={subTitle} />}
    </Header>
  );
};

export default PlatformHeader;

const Header = styled.div`
  max-width: 500px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding-bottom: 20px;
  background: #222222;
`;
