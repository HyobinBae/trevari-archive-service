import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import NewCurationInfoCard from './NewCurationInfoCard';
import { Button, Loading } from '@trevari/components';
import NewCurationCardList from './NewCurationCardList';
import { useAppDispatch, useAppSelector } from 'services/store';
import { selectWishClubIds } from '../services/main.store';
import { getWishClubs, useGetNewCurationsQuery } from '../services/main.api';
import { selectAuthenticated, selectUserId } from 'services/auth/auth.store';
import ga from '../ga';

const NewCurationList = () => {
  const dispatch = useAppDispatch();
  const { data: newCurations, isLoading } = useGetNewCurationsQuery({ limit: 10000, offset: 0 });
  const authenticated = useAppSelector(selectAuthenticated);
  const userId = useAppSelector(selectUserId);
  const wishClubIds = useAppSelector(selectWishClubIds);
  useEffect(() => {
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

  const onClickViewAllButton = (id: string, title: string) => {
    ga.event({ action: '버튼 클릭', category: '메인 페이지', label: `전체보기^${title}` });
    window.location.href = `/curations/${id}`;
  };

  if (isLoading)
    return (
      <>
        <Loading flicker variant="curation" />
        <ListContainer>
          <Loading flicker variant="flexCardList" />
        </ListContainer>
        <Loading flicker variant="curation" />
        <ListContainer>
          <Loading flicker variant="flexCardList" />
        </ListContainer>
      </>
    );
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
              style={{ maxHeight: '44px', minHeight: '44px' }}
              onClick={() => onClickViewAllButton(curation.id, curation.title)}
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
const ListContainer = styled.div`
  padding: 20px 0 20px 20px;
`;
export default NewCurationList;
