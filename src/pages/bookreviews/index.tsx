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
import { ClubRole } from '../../types/__generate__/user-backend-api';
import BookreviewItem from '../main/components/BookreviewItem';
import { getBookreviews } from './services/api';
import LoadingPage from '../../components/base/LoadingPage';
import Loading from '../../components/svgs/Loading';
import CloseIcon from 'components/svgs/CloseIcon';
import { selectBookreivews } from './services/bookreview.store';
import { debounce } from 'lodash';

const Bookreviews = () => {
  const dispatch = useAppDispatch();
  const authenticated = useAppSelector(selectAuthenticated);
  const userId = useAppSelector(selectUserId);
  const isMember = useSelector(selectUserIsMember);
  const roles = useSelector(selectUserRoles);
  const bookreviews = useSelector(selectBookreivews);
  const [showTooltip, setShowTooltip] = useState(true);
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
    const notShowTooltip = window.localStorage.getItem('notShowTooltip');
    if (notShowTooltip === 'true') {
      setShowTooltip(false);
    }
  }, []);


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


  const doseNotShowTooltip = () => {
    window.localStorage.setItem('notShowTooltip', 'true');
    setShowTooltip(false);
  };

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
              아직 등록된 독후감이 없어요.
              <br />
              가장 먼저 독후감을 작성해보세요.
            </EmptyDescription>
          </EmojiWrapper>
        )}
      </Box>
      <TooltipWrapper>
        {showTooltip && (
          <Tooltip>
            <span>독후감 작성은 여기서 할 수 있어요!</span>
            <ButtonWrapper onClick={doseNotShowTooltip}>
              <CloseIcon fill="#ffffff" width={16} height={16} />
            </ButtonWrapper>
          </Tooltip>
        )}
        <WritingIconWrapper onClick={() => goToPage(`${endpoints.user_page_url}/mypage`)}>
          <WritingIcon width={28} height={28} />
        </WritingIconWrapper>
      </TooltipWrapper>
    </>
  ) : (
    <BlurWrapper>
      <div>
        <BlurInBookreviews width={'100%'} height={'100%'} />
      </div>
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

const TooltipWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row-reverse;
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
  bottom: 170px;
  width: 239px;
  background: black;
  color: white;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 12px 10px 12px 12px;
  ${body6};
  gap: 4px;
  margin-right: 20px;
  &::after {
    border-top: 10px solid black;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 0px solid transparent;
    content: '';
    position: absolute;
    top: 40px;
    right: 20px;
  }
`;
const WritingIconWrapper = styled.div`
  width: 58px;
  height: 58px;
  bottom: 93.5px;
  filter: drop-shadow(0px 4px 4px rgba(255, 121, 0, 0.2));
  position: fixed;
  background: ${({ theme }) => theme.colors.orange900};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  margin-right: 26px;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  cursor: pointer;
  height: 16px;
`;
export default Bookreviews;
