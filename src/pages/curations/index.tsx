import { useEffect } from 'react';
import styled from '@emotion/styled';

import { useAppDispatch, useAppSelector } from 'services/store';
import { selectNewCuration, selectWishClubIds } from 'pages/main/services/main.store';
import { getNewCuration, getWishClubs } from 'pages/main/services/main.api';
import { IClub, IEvent, INewCuration } from 'pages/main/services/main.types';
import { selectAuthenticated, selectUserId } from 'services/auth/auth.store';

import { useParams } from 'react-router-dom';
import { CurationInfoBox, CurationTitle, CurationBody, Divider } from 'pages/curations/curations.styles';
import Box from 'components/base/Box';
import NewCurationClubCard from 'pages/main/components/NewCurationClubCard';
import { body6 } from '@trevari/typo';
import { Button } from '@trevari/components';
import { goToPage } from 'utils';
import NewCurationEventCard from 'pages/main/components/NewCurationEventCard';
import LoadingPage from 'components/base/LoadingPage';
import { useWindowSize } from 'hooks/useWindowSize';
import { CURATION_CARD_ASPECT_RATIO } from 'pages/main/const';

const Curations = () => {
  const { width } = useWindowSize();
  const { curationId } = useParams();
  const dispatch = useAppDispatch();
  const authenticated = useAppSelector(selectAuthenticated);
  const wishClubIds = useAppSelector(selectWishClubIds);
  const newCuration: INewCuration | null = useAppSelector(selectNewCuration);
  const userId = useAppSelector(selectUserId);

  const onClickShowAllClubsButton = () => {
    goToPage('https://dev.trevari.co.kr/apply');
  };
  useEffect(() => {
    dispatch(getNewCuration.initiate({ id: curationId || '' }));
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
  }, [dispatch, authenticated, newCuration]);

  const isClubCuration = (item: IClub | IEvent) => {
    if ('coverUrl' in item) {
      return true;
    }
    return false;
  };

  const cardImgHeight =
    width > 500
      ? `calc(450px * ${CURATION_CARD_ASPECT_RATIO} / 2)`
      : `calc((100vw - 50px) * ${CURATION_CARD_ASPECT_RATIO} / 2)`;

  if (!newCuration) return <LoadingPage />;
  return (
    <Box style={{ paddingTop: '64px', minHeight: '100vh', paddingBottom: '67px' }}>
      <CurationInfoBox>
        <CurationTitle>{newCuration.head}</CurationTitle>
        <CurationBody>{newCuration.description}</CurationBody>
      </CurationInfoBox>

      <Divider />
      {newCuration.lists.clubLists.length > 0 && (
        <GridCardCount>{`총 ${newCuration.lists.clubLists.length}개`}</GridCardCount>
      )}
      <GridBox>
        {[...newCuration.lists.clubLists, ...newCuration.lists.eventLists].map(item => (
          <>
            {isClubCuration(item) ? (
              <NewCurationClubCard
                isWishClub={wishClubIds.includes(item.id)}
                cardWidth="100%"
                key={item.id}
                club={item}
                imgHeight={cardImgHeight}
              />
            ) : (
              <NewCurationEventCard cardWidth="100%" key={item.id} event={item} imgHeight={cardImgHeight} />
            )}
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
