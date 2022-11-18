import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import NewCurationInfoCard from './NewCurationInfoCard';
import { Button } from '@trevari/components';
import NewCurationCardList from './NewCurationCardList';
import { useAppDispatch, useAppSelector } from 'services/store';
import { selectNewCurations, selectWishClubIds } from '../services/main.store';
import { getNewCurations, getWishClubs } from '../services/main.api';
import { INewCuration } from '../services/main.types';
import { selectAuthenticated, selectUserId } from 'services/auth/auth.store';
import { useNavigate } from 'react-router-dom';

const NewCurationList = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const newCurations: INewCuration[] = useAppSelector(selectNewCurations);
  const authenticated = useAppSelector(selectAuthenticated);
  const userId = useAppSelector(selectUserId);
  const wishClubIds = useAppSelector(selectWishClubIds);
  useEffect(() => {
    dispatch(getNewCurations.initiate({ limit: 10000, offset: 0 }));
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
  }, [dispatch, authenticated]);

  const onClickViewAllButton = (id: string) => {
    window.location.href = `/curations/${id}`;
  };

  return (
    <Box>
      {newCurations?.map((curation, index) => (
        <React.Fragment key={curation.id}>
          <NewCurationInfoCard curation={curation} />
          <NewCurationCardList
            lists={[...curation.lists.clubLists, ...curation.lists.eventLists]}
            wishClubIds={wishClubIds}
          />
          <ButtonWrapper isLast={newCurations.length === index + 1}>
            <Button
              onClick={() => onClickViewAllButton(curation.id)}
              size="large"
              fullWidth
              colorVariant="dark"
              variant="outline"
            >
              전체 보기
            </Button>
          </ButtonWrapper>
        </React.Fragment>
      ))}
    </Box>
  );
};

const Box = styled.div``;
const ButtonWrapper = styled.div<{ isLast: boolean }>`
  padding: 0 20px;
  margin: ${({ isLast }) => (isLast ? '24px 0 64px' : '24px 0 60px')};
`;
export default NewCurationList;
