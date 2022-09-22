import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import { useAppDispatch, useAppSelector } from 'services/store';
import { Base, CurationsContainer } from 'pages/main/styles/main.style';
import { selectDisplayCurations, selectTagOrders } from 'pages/main/services/main.store';
import { getCurationDisplayOrders, getCurations, getWishClubs } from 'pages/main/services/main.api';
import TagTitle from 'pages/main/components/TagTitle';
import CurationClubs from 'pages/main/components/CurationClubs';
import { Club, Tag } from 'types/__generate__/user-backend-api';
import { selectAuthenticated, selectUserId } from 'services/auth/auth.store';

const random = 0.15132412105559778;

const CurationList = () => {
  const dispatch = useAppDispatch();
  const tagOrders = useAppSelector(selectTagOrders);
  const authenticated = useAppSelector(selectAuthenticated);
  const curations = useAppSelector(selectDisplayCurations);
  const userId = useAppSelector(selectUserId);

  const options = {
    limit: 10,
    where: {
      types: ['함께 만드는 클럽', '클럽장 있는 클럽', '트레바리가 디자인한 클럽', '함께 듣는 클럽'],
      containsFullClub: true,
      isClosed: false,
      randomSeed: random,
      tagIDs: tagOrders.filter(order => order !== 'WISHED_CLUB').slice(0, 25),
    },
  };

  useEffect(() => {
    dispatch(getCurationDisplayOrders.initiate({ where: { type: 'tag', isDisplayed: true } }));
    dispatch(getCurations.initiate(options));
    if (authenticated) {
      dispatch(
        getWishClubs.initiate({
          where: {
            userID: userId,
            isClosed: false,
            isFullClub: false,
            isAppliablePeriod: true,
          },
        }),
      );
    }
  }, [dispatch, authenticated, curations, tagOrders]);

  return (
    <Base>
      <CurationsContainer>
        {curations?.map(({ clubs, tag }: { clubs: Club[]; tag: Tag }) => {
          // const { clubs, tag } = curation;
          return (
            <CurationRow key={tag?.id}>
              <TagTitle title={tag?.name || ''} more={`https://trevari.co.kr/tags/show?tagID=${tag?.id}`} />
              <CurationClubs clubs={clubs} />
            </CurationRow>
          );
        })}
      </CurationsContainer>
    </Base>
  );
};

export default CurationList;

const CurationRow = styled.div`
  margin: 0 0 24px 0;
`;
