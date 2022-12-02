import { useEffect } from 'react';
import styled from '@emotion/styled';

import { body6, heading11 } from '@trevari/typo';
import { endpoints } from 'config';
import { goToPage } from 'utils';
import { selectAuthenticated, selectUserId } from 'services/auth/auth.store';
import { useAppDispatch, useAppSelector } from 'services/store';
import { useWindowSize } from 'hooks/useWindowSize';
import Box from 'components/base/Box';
import EmptyEmoji from 'components/svgs/EmptyEmoji';
import NewCurationClubCard from 'pages/main/components/NewCurationClubCard';
import { CURATION_CARD_ASPECT_RATIO } from 'pages/main/const';
import { getWishClubs, useGetWishClubsQuery } from 'pages/main/services/main.api';
import { Loading } from '@trevari/components';

const WishList = () => {
  const { width } = useWindowSize();
  const dispatch = useAppDispatch();
  const authenticated = useAppSelector(selectAuthenticated);
  const userId = useAppSelector(selectUserId);
  const { data: wishClubs, isLoading } = useGetWishClubsQuery({
    where: {
      userID: userId,
      isClosed: false,
      isFullClub: false,
      isAppliablePeriod: true,
    },
  });

  const isGuest = userId === 'guest';
  useEffect(() => {
    if (isGuest) {
      goToPage(`${endpoints.user_login_page_url}/?redirectionUrl=/wishList`);
      return;
    }
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
  }, [dispatch, authenticated, userId]);

  const cardImgHeight =
    width > 500
      ? `calc(450px * ${CURATION_CARD_ASPECT_RATIO} / 2)`
      : `calc((100vw - 50px) * ${CURATION_CARD_ASPECT_RATIO} / 2)`;

  if (!authenticated || isLoading)
    return (
      <LoadingContainer>
        <Loading flicker variant="gridCardList" />
      </LoadingContainer>
    );
  const cardLength = wishClubs ? wishClubs.length : 0;
  return (
    <Box style={{ paddingTop: '48px', minHeight: '100vh', paddingBottom: '67px' }}>
      <GridCardCount>{`총 ${cardLength}개`}</GridCardCount>
      {wishClubs && wishClubs?.length > 0 ? (
        <GridBox>
          {wishClubs?.map(item => (
            <NewCurationClubCard
              isWishClub={true}
              cardWidth="100%"
              key={item.clubID}
              club={item.club}
              imgHeight={cardImgHeight}
            />
          ))}
        </GridBox>
      ) : (
        <EmojiWrapper>
          <EmptyEmoji />
          <EmptyDescription>찜한 클럽이 없습니다.</EmptyDescription>
        </EmojiWrapper>
      )}
    </Box>
  );
};

const GridCardCount = styled.span`
  ${body6};
  display: block;
  margin-top: 24px;
  padding-left: 20px;
  color: ${({ theme }) => theme.colors.gray600};
`;
const GridBox = styled.div`
  display: grid;
  margin: 12px 0 80px;
  padding: 0 20px;
  column-gap: 9px;
  row-gap: 24px;
  grid-template-columns: repeat(2, 1fr);
`;
const EmojiWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 172px;
  align-items: center;
`;
const EmptyDescription = styled.p`
  ${heading11};
  margin-top: 30px;
`;
export const LoadingContainer = styled.div`
  padding: 110px 20px;
`;
export default WishList;
