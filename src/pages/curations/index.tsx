import { useEffect } from 'react';
import styled from '@emotion/styled';

import { useAppDispatch, useAppSelector } from 'services/store';
import {
  selectDisplayCurations,
  selectScheduledClubs,
  selectTagOrders,
  selectWishClubIds,
} from 'pages/main/services/main.store';
import { getCurationDisplayOrders, getCurations, getScheduledClubs, getWishClubs } from 'pages/main/services/main.api';
import { ICuration } from 'pages/main/services/main.types';
import { selectAuthenticated, selectUserId } from 'services/auth/auth.store';
import { IS_PRODUCTION } from 'config';

import { useParams } from 'react-router-dom';
import { CurationInfoBox, CurationTitle, CurationBody, Divider } from 'pages/curations/curations.styles';
import Box from 'components/base/Box';
import NewCurationClubCard from 'pages/main/components/NewCurationClubCard';
import { body6 } from '@trevari/typo';
import { Button } from '@trevari/components';
import { goToPage } from 'utils';

const curation = {
  id: '1',
  title: '자본주의 살아남기',
  isDisplay: true,
  description: '어떻게 살아남아야 할까?',
  head: '나계속지금처럼일하고벌고써도괜찮을까나계속지금처럼일하고벌고',
  body: '우리는지금이시대에서경제적자유를획득하고주도적인삶을살아가기위해서창업가의태도와역량이필요하다고믿습니다우리는지금',
  order: 1,
  createdAt: 1,
  coverUrl:
    'https://image.trevari.co.kr/file/d7e3576e-9f2d-4e93-b3b8-760e98cac9f0.%E1%84%86%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%AE%E1%86%AB%20%E1%84%82%E1%85%B5%E1%86%B7.png',
  list: [],
};

const random = 0.15132412105559778;

const Curations = () => {
  const { curationId } = useParams();

  const dispatch = useAppDispatch();
  const getCuration = async () => {
    console.log(curationId);
  };
  const tagOrders = useAppSelector(selectTagOrders);
  const scheduledClubs = useAppSelector(selectScheduledClubs);
  const authenticated = useAppSelector(selectAuthenticated);
  const wishClubIds = useAppSelector(selectWishClubIds);
  const curations: ICuration[] = useAppSelector(selectDisplayCurations);
  const userId = useAppSelector(selectUserId);

  const options = {
    limit: 10,
    where: {
      types: ['함께 만드는 클럽', '클럽장 있는 클럽', '트레바리가 디자인한 클럽', '함께 듣는 클럽'],
      containsFullClub: true,
      isClosed: false,
      randomSeed: random,
      tagIDs: IS_PRODUCTION ? tagOrders.slice(0, 25) : tagOrders.filter(order => order !== 'WISHED_CLUB').slice(0, 25),
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
  };

  const onClickShowAllClubsButton = () => {
    goToPage('https://trevari.co.kr/apply');
  };
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
    getCuration();
  }, [dispatch, authenticated, curations, tagOrders, scheduledClubs]);

  return (
    <Box style={{ paddingTop: '64px', minHeight: '100vh', paddingBottom: '67px' }}>
      <CurationInfoBox>
        <CurationTitle>{curation.head}</CurationTitle>
        <CurationBody>{curation.description}</CurationBody>
      </CurationInfoBox>

      <Divider />
      {curations && curations[0] && curations[0].clubs && curations[0].clubs.length > 0 && (
        <GridCardCount>{`총 ${curations[0].clubs.length}개의 클럽`}</GridCardCount>
      )}
      <GridBox>
        {curations &&
          curations[0] &&
          curations[0].clubs &&
          curations[0].clubs.length > 0 &&
          curations[0].clubs.map(club => (
            <>
              <NewCurationClubCard
                isWishClub={wishClubIds.includes(club.id)}
                cardWidth="100%"
                key={club.id}
                club={club}
              />
            </>
          ))}
      </GridBox>
      <ButtonWrapper>
        <Button size="big" fullWidth onClick={onClickShowAllClubsButton}>
          모든 클럽 보러가기
        </Button>
      </ButtonWrapper>
    </Box>
  );
};

const GridCardCount = styled.span`
  ${body6};
  display: block;
  margin-top: 40px;
  padding-left: 20px;
  color: ${({ theme }) => theme.colors.gray600};
`;
const GridBox = styled.div`
  display: grid;
  margin: 12px 0 40px;
  padding: 0 20px;
  column-gap: 9px;
  row-gap: 24px;
  grid-template-columns: repeat(2, 1fr);
`;
const ButtonWrapper = styled.div`
  padding: 0 20px;
  margin: 40px 0 80px;
`;
export default Curations;
