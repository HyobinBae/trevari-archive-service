import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import { useAppDispatch, useAppSelector } from 'services/store';
import { Base, CurationsContainer } from 'pages/main/styles/main.style';
import { selectDisplayCurations, selectScheduledClubs, selectTagOrders } from 'pages/main/services/main.store';
import { getCurationDisplayOrders, getCurations, getScheduledClubs, getWishClubs } from 'pages/main/services/main.api';
import TagTitle from 'pages/main/components/TagTitle';
import CurationClubs from 'pages/main/components/CurationClubs';
import { ICuration } from 'pages/main/services/main.types';
import { Club, Tag } from 'types/__generate__/user-backend-api';
import { selectAuthenticated, selectUserId } from 'services/auth/auth.store';
import { endpoints } from 'config';
import ViewAllClubsButton from 'pages/main/components/ViewAllClubsButton';
import { SCHEDULED_CLUB_TAG } from '../const';

const random = 0.15132412105559778;

const CurationList = () => {
  const dispatch = useAppDispatch();
  const tagOrders = useAppSelector(selectTagOrders);
  const scheduledClubs = useAppSelector(selectScheduledClubs);
  const authenticated = useAppSelector(selectAuthenticated);
  const curations: ICuration[] = useAppSelector(selectDisplayCurations);
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

  const scheduledClubsOptions = {
    offset: 0,
    randomSeed: random,
    where: {
      categoryIDs: [],
      days: [],
      isClosed: false,
      name: undefined,
      placeIDs: [],
      types: ['함께 만드는 클럽', '클럽장 있는 클럽', '함께 듣는 클럽'],
      isOpenClub: false,
    },
  }

  useEffect(() => {
    dispatch(getCurationDisplayOrders.initiate({ where: { type: 'tag', isDisplayed: true } }));
    dispatch(getCurations.initiate(options));
    dispatch(getScheduledClubs.initiate(scheduledClubsOptions));
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

  }, [dispatch, authenticated, curations, tagOrders, scheduledClubs ]);

  return (
    <Base>
      <CurationsContainer>
        {curations?.map(({ clubs, tag }: { clubs: Club[]; tag: Tag }) => {
          return (
            <CurationRow key={tag?.id}>
              <TagTitle title={tag?.name || ''} more={`${endpoints.user_page_url}/tags/show?tagID=${tag?.id}`} />
              <CurationClubs clubs={clubs} tag={tag} />
            </CurationRow>
          );
        })}
        {scheduledClubs.length > 0 && (
          <CurationRow key={SCHEDULED_CLUB_TAG?.id}>
            <TagTitle title={SCHEDULED_CLUB_TAG?.name || ''} more={`${endpoints.user_page_url}/tags/show?tagID=${SCHEDULED_CLUB_TAG?.id}`} />
            <CurationClubs clubs={scheduledClubs} tag={SCHEDULED_CLUB_TAG} />
          </CurationRow>
        )}
      </CurationsContainer>
      <ViewAllClubsButton />
    </Base>
  );
};

export default CurationList;

const CurationRow = styled.div`
  margin: 0 0 24px 0;
`;
