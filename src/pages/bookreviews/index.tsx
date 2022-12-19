import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { body6, heading11, title4 } from '@trevari/typo';
import { endpoints } from 'config';
import { goToPage } from 'utils';
import { selectAuthenticated, selectUserId } from 'services/auth/auth.store';
import { useAppDispatch, useAppSelector } from 'services/store';
import Box from 'components/base/Box';
import { Button } from '@trevari/components';
import { WriteIcon, WritingIcon } from '@trevari/icons';
import { useSelector } from 'react-redux';
import { selectUserIsMember, selectUserRoles } from '../../services/user/user.store';
import BlurInBookreviews from '../../components/svgs/BlurInBookreviews';
import { Bookreview, ClubRole } from '../../types/__generate__/user-backend-api';
import BookreviewItem from '../main/components/BookreviewItem';
import { getBookreviews, useGetBookreviewsQuery } from './services/api';
import LoadingPage from '../../components/base/LoadingPage';
import Loading from '../../components/svgs/Loading';

const Bookreviews = () => {
  const dispatch = useAppDispatch();
  const authenticated = useAppSelector(selectAuthenticated);
  const userId = useAppSelector(selectUserId);
  const isMember = useSelector(selectUserIsMember);
  const roles = useSelector(selectUserRoles);
  const [filteredClubRoles, setFilteredClubRoles] = useState<ClubRole[]>(roles);

  const [totalBookreviews, setTotalBookreviews] = useState<Bookreview[]>([]);
  const [totalBookreviewsLength, setTotalBookreviewsLength] = useState<number>(0);
  const [totalBookreviewsOffset, setTotalBookreviewsOffset] = useState<number>(0);
  const [isLoadingMoreBookreviews, setIsLoadingMoreBookreviews] = useState<boolean>(false);
  const { data: bookreviews, isLoading } = useGetBookreviewsQuery({ limit: 10, offset: 0, userID: userId });

  useEffect(() => {
    const filteredClubRoles = roles
      .filter((role: ClubRole) => new Date(role.club.endedAt) >= new Date())
      .slice()
      .sort((a, b) => new Date(a.club.meetings[0].startedAt) - new Date(b.club.meetings[0].startedAt));
    setFilteredClubRoles(filteredClubRoles);
  }, [roles]);

  useEffect(() => {
    sortBookreviews();
  }, [isLoading]);

  const sortBookreviews = async () => {
    if (bookreviews) {
      const sortedBookreviews = bookreviews.slice().sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
      setTotalBookreviews(sortedBookreviews);
      setTotalBookreviewsLength(sortedBookreviews.length);
    }
  }

  useEffect(() => {
    const loadMore = async () => {
      setIsLoadingMoreBookreviews(true);
      if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        const bookreviewsAction = await dispatch(
          getBookreviews.initiate({
            limit: 10, offset: totalBookreviewsOffset + 10, userID: userId
          })
        );
        const sortedBookreviews = bookreviewsAction.data.slice().sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        setTotalBookreviews(totalBookreviews.concat(sortedBookreviews));
        setTotalBookreviewsOffset(bookreviewsAction.data.length + totalBookreviewsLength);
        setIsLoadingMoreBookreviews(false);
      }
    };
    window.addEventListener('scroll', loadMore);
    return () => {
      window.removeEventListener('scroll', loadMore);
    };
  }, [totalBookreviews]);

  const isGuest = userId === 'guest';

  useEffect(() => {
    if (isGuest) {
      goToPage(`${endpoints.user_login_page_url}/?redirectionUrl=/bookreviews`);
      return;
    }
  }, [dispatch, authenticated, userId]);

  let moreClubRolesLength = null;
  let clubName = '';
  let renderClubRoles = filteredClubRoles;
  if (filteredClubRoles.length > 3) {
    renderClubRoles = filteredClubRoles.slice(0, 3);
    moreClubRolesLength = filteredClubRoles.length - 3;
  }

  if (isLoading) return <LoadingPage />;

  // const totalBookreviews = [...bookreviews, ...bookreviewsTemp].sort(
  //   (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt),
  // );
  // const totalBookreviewsLength = totalBookreviews.length;
  return isMember ? (
    <>
      <Box style={{ paddingTop: '48px', minHeight: '100vh', paddingBottom: '67px' }}>
        <UserClubListWrapper>
          {filteredClubRoles.length > 0 ? (
            <UserClubList>
              {renderClubRoles.map((role: ClubRole, index) => {
                if (filteredClubRoles.length > 3) {
                  if (index === renderClubRoles.length - 1) {
                    clubName = `${role.club.name} 외 ${moreClubRolesLength}개 클럽 `;
                  } else {
                    clubName = `${role.club.name} / `;
                  }
                } else {
                  if (index === renderClubRoles.length - 1) {
                    clubName = `${role.club.name} `;
                  } else {
                    clubName = `${role.club.name} / `;
                  }
                }
                return <span key={role.club.id}>{clubName}</span>;
              })}
              멤버들의 독후감을 만나보세요.
            </UserClubList>
          ) : (
            <div>활동했던 클럽의 독후감을 만나보세요.</div>
          )}
        </UserClubListWrapper>
        <GridCardCount>{`총 ${totalBookreviewsLength}개`}</GridCardCount>
        {totalBookreviews && totalBookreviews?.length > 0 ? (
          <GridBox>
            {totalBookreviews?.map((item: ClubRole) => (
              <BookreviewItem key={item.clubID} bookreview={item} userID={userId} reloadBookreviews={sortBookreviews} />
            ))}
            {isLoadingMoreBookreviews && <Loading />}
          </GridBox>
        ) : (
          <EmojiWrapper>
            <WriteIcon width={90} height={90} />
            <EmptyDescription>
              아직 등록된 독후감이 없어요.
              <br />
              가장 먼저 독후감을 작성해보세요.
            </EmptyDescription>
          </EmojiWrapper>
        )}
      </Box>
      <Tooltip>독후감 작성</Tooltip>
      <WritingIconWrapper onClick={() => goToPage(`${endpoints.user_page_url}/mypage`)}>
        <WritingIcon width={28} height={28} />
      </WritingIconWrapper>
    </>
  ) : (
    <BlurWrapper>
      <div>
        <BlurInBookreviews width={'100%'} height={'100%'} />
      </div>
      <BlurInBookreviewsWrapper>
        <WriteIcon width={90} height={90} />
        <EmptyDescription>멤버들만 이용할 수 있는 독후감 피드입니다.</EmptyDescription>
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
  }
`;
const BlurWrapper = styled.div`
  padding-top: 48px;
`;

export const LoadingContainer = styled.div`
  padding: 110px 20px;
`;

const Tooltip = styled.div`
  position: fixed;
`;
export default Bookreviews;
