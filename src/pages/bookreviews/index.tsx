import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { body6, heading11, title4 } from '@trevari/typo';
import { endpoints } from 'config';
import { goToPage } from 'utils';
import { selectAuthenticated, selectUserId } from 'services/auth/auth.store';
import { useAppDispatch, useAppSelector } from 'services/store';
import Box from 'components/base/Box';
import { Button } from '@trevari/components';
import { WriteIcon } from '@trevari/icons';
import { useSelector } from 'react-redux';
import { selectUserIsMember, selectUserRoles } from '../../services/user/user.store';

import { ClubRole } from '../../types/__generate__/user-backend-api';
import BookreviewItem from '../main/components/BookreviewItem';
import { getBookreviews } from './services/api';
import LoadingPage from '../../components/base/LoadingPage';
import Loading from '../../components/svgs/Loading';
import { selectBookreivews } from './services/bookreview.store';
import { debounce } from 'lodash';
import {DEFAULT_BLUR_IMAGE, DEFAULT_PROFILE_IMAGE} from "../main/const";

const Bookreviews = () => {
  const dispatch = useAppDispatch();
  const authenticated = useAppSelector(selectAuthenticated);
  const userId = useAppSelector(selectUserId);
  const isMember = useSelector(selectUserIsMember);
  const roles = useSelector(selectUserRoles);
  const bookreviews = useSelector(selectBookreivews);
  const [filteredClubRoles, setFilteredClubRoles] = useState<ClubRole[]>(roles);
  const [totalBookreviewsOffset, setTotalBookreviewsOffset] = useState<number>(0);
  const [isLoadingMoreBookreviews, setIsLoadingMoreBookreviews] = useState<boolean>(false);
  const { count, bookreviews: totalBookreviews, loading } = bookreviews;

  useEffect(() => {
    const isGuest = userId === 'guest';
    if (isGuest) {
      goToPage(`${endpoints.user_login_page_url}/?redirectionUrl=/bookreviews`);
      return;
    }
    if (userId) {
      dispatch(getBookreviews.initiate({ limit: 10, offset: 0, userID: userId }));
    }
  }, [dispatch, authenticated, userId]);

  useEffect(() => {
    const filteredClubRoles = roles
      .filter((role: ClubRole) => new Date(role.club.endedAt) >= new Date())
      .filter((role: ClubRole) => role.refundStatus === null)
      .slice()
      .sort((a, b) => new Date(a.club.meetings[0].startedAt) - new Date(b.club.meetings[0].startedAt));
    setFilteredClubRoles(filteredClubRoles);
  }, [roles]);

  useEffect(() => {
    const loadMoreBookreviews = () => {
      const moMoreLoad = totalBookreviewsOffset + 10 >= count;
      const scrollToEnd = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100;
      if (moMoreLoad) {
        setIsLoadingMoreBookreviews(false);
        return;
      }
      setIsLoadingMoreBookreviews(true);
      if(scrollToEnd) {
        dispatch(
          getBookreviews.initiate({
            limit: moMoreLoad ? count : totalBookreviews.length + 10, offset: 0, userID: userId
          })
        );
        setTotalBookreviewsOffset(moMoreLoad ? count : totalBookreviewsOffset + 10);
        setIsLoadingMoreBookreviews(false);
      }
    };

    const handleScroll = debounce(() => {
      setIsLoadingMoreBookreviews(prevState => !prevState);
      loadMoreBookreviews();
    }, 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalBookreviews, isLoadingMoreBookreviews]);

  let moreClubRolesLength = null;
  let clubName = '';
  let renderClubRoles = filteredClubRoles;
  if (filteredClubRoles.length > 3) {
    renderClubRoles = filteredClubRoles.slice(0, 3);
    moreClubRolesLength = filteredClubRoles.length - 3;
  }

  if (loading) return <LoadingPage />;

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
        <GridCardCount>{`총 ${count}개`}</GridCardCount>
        {!loading && totalBookreviews && totalBookreviews?.length > 0 ? (
          <GridBox>
            {totalBookreviews?.map((item: ClubRole) => (
              <BookreviewItem key={item.clubID} bookreview={item} userID={userId} />
            ))}
             {isLoadingMoreBookreviews && <Loading />}
          </GridBox>
        ) : (
          <EmojiWrapper>
            <WriteIcon width={90} height={90} />
            <EmptyDescription>
              아직 등록된 독후감이 없습니다.
              <br />
              가장 먼저 독후감을 작성해보세요.
            </EmptyDescription>
          </EmojiWrapper>
        )}
      </Box>
    </>
  ) : (
    <BlurWrapper>
      <BlurImage src={DEFAULT_BLUR_IMAGE} width='375' height='674' alt='트레바리'/>
      <BlurInBookreviewsWrapper>
        <WriteIcon width={90} height={90} />
        <EmptyDescription>멤버만 이용할 수 있습니다.</EmptyDescription>
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

const BlurImage = styled.img`
  width: 375px;
  height: 674px;
`;

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
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
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

export default Bookreviews;
