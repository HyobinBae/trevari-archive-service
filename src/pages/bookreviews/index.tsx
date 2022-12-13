import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import { body6, heading11, title4 } from '@trevari/typo';
import { endpoints } from 'config';
import { goToPage } from 'utils';
import { selectAuthenticated, selectUserId } from 'services/auth/auth.store';
import { useAppDispatch, useAppSelector } from 'services/store';
import { useWindowSize } from 'hooks/useWindowSize';
import Box from 'components/base/Box';
import NewCurationClubCard from 'pages/main/components/NewCurationClubCard';
import { CURATION_CARD_ASPECT_RATIO } from 'pages/main/const';
import { Button, Loading } from '@trevari/components';
import { WriteIcon, WritingIcon } from '@trevari/icons';
import { useSelector } from 'react-redux';
import { selectUserIsMember, selectUserRoles } from '../../services/user/user.store';
import BlurInBookreviews from '../../components/svgs/BlurInBookreviews';
import { ClubRole } from '../../types/__generate__/user-backend-api';
import { useGetWishClubsQuery } from '../main/services/main.api';
import BookreviewItem from '../main/components/BookreviewItem';

const Bookreviews = () => {
  const { width } = useWindowSize();
  const dispatch = useAppDispatch();
  const authenticated = useAppSelector(selectAuthenticated);
  const userId = useAppSelector(selectUserId);
  const isMember = useSelector(selectUserIsMember);
  const roles = useSelector(selectUserRoles);

  const {
    data: wishClubs,
    isLoading,
    refetch,
  } = useGetWishClubsQuery({
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
      goToPage(`${endpoints.user_login_page_url}/?redirectionUrl=/bookreviews`);
      return;
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
  const roleLength = roles ? roles.length : 0;

  const isShow = roles.filter(( role: ClubRole ) => !role.club.isClosed).length > 0;

  return isMember ? (
    <>
      <Box style={{ paddingTop: '48px', minHeight: '100vh', paddingBottom: '67px' }}>
        <UserClubListWrapper>
          {isShow ? <UserClubList>
            {roles
              .filter(( role: ClubRole ) => !role.club.isClosed)
              .map(( role: ClubRole, index ) => {
                return (
                  <span key={role.club.id}>{index === roles.length -1 ? role.club.name : `${role.club.name} / `} </span>
                )
              })}
            멤버들의 독후감을 만나보세요.
          </UserClubList> :
            <div>활동했던 클럽의 독후감을 만나보세요.</div>
          }
        </UserClubListWrapper>
        <GridCardCount>{`총 ${roleLength}개`}</GridCardCount>
        {roles && roles?.length > 0 ? (
          <GridBox>
            {roles?.map((item: ClubRole) => (
              <BookreviewItem key={item.clubID} club={item.club} clubID={item.clubID}/>
            ))}
          </GridBox>
        ) : (
          <EmojiWrapper>
            <WriteIcon width={90} height={90} />
            <EmptyDescription>
              아직 등록된 독후감이 없어요.<br/>
              가장 먼저 독후감을 작성해보세요.
            </EmptyDescription>
          </EmojiWrapper>
        )}
      </Box>
      <WritingIconWrapper onClick={() => goToPage(`${endpoints.user_page_url}/mypage`)}>
        <WritingIcon width={28} height={28}/>
      </WritingIconWrapper>
    </>
  ) : (
    <BlurWrapper>
      <div>
        <BlurInBookreviews width={'100%'} height={'100%'}/>
      </div>
      <BlurInBookreviewsWrapper>
        <WriteIcon width={90} height={90} />
        <EmptyDescription>
          멤버들만 이용할 수 있는 독후감 피드입니다.
        </EmptyDescription>
        <Button
          style={{ maxHeight: '36px', minHeight: '36px', fontSize: '0.875rem' }}
          onClick={() => goToPage(`${endpoints.user_page_url}/apply`)}
          size="medium"
          variant="outline"
        >
          클럽 구경하러 가기
        </Button>
      </BlurInBookreviewsWrapper>
    </BlurWrapper>
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
  margin: 12px 0 80px;
`;
const EmojiWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;
const EmptyDescription = styled.div`
  ${heading11};
  margin-top: 30px;
  text-align: center;
`;

const WritingIconWrapper = styled.div`
  width: 58px;
  height: 58px;
  bottom: 93.5px;
  filter: drop-shadow(0px 4px 4px rgba(255, 121, 0, 0.2));
  position: sticky;
  background: ${({ theme }) => theme.colors.orange900};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  float: right;
  margin-right: 26px;
`;
const BlurInBookreviewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const UserClubListWrapper = styled.div`
  ${title4};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 23px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 10px;
  padding-right: 10px;
  background: ${({ theme }) => theme.colors.gray100};
  border-radius: 2px;
`;
const UserClubList = styled.div`
  span {
    color: ${({ theme }) => theme.colors.orange900};
  };
`;
const BlurWrapper = styled.div`
  padding-top: 48px;
`;

export const LoadingContainer = styled.div`
  padding: 110px 20px;
`;
export default Bookreviews;
