import React, { useEffect, useState } from 'react';
import { Bookreview } from '../../../types/__generate__/user-backend-api';
import styled from '@emotion/styled';
import { ProfileAvatar } from '@trevari/components';
import { CommentIcon, HeartIcon, KebabIcon, LoveFilledIcon } from '@trevari/icons';
import { body8, contents2, heading9, title4, title6 } from '@trevari/typo';
import { elapsedTime } from '../../../utils/time';
import { useTheme } from '@emotion/react';
import { goToPage, stripAllTags } from '../../../utils';
import { endpoints } from '../../../config';
import { toastAlert } from '../../../services/ui.store';
import MoreItems from './MoreItems';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { useWindowSize } from '../../../utils/windowResize';
import { deleteBookreview, getBookreviewLikeUsers, toggleLikeOnBookreview } from '../../bookreviews/services/api';
import BaseModal from './ModalBase';
import { useAppDispatch } from '../../../services/store';
import DefaultProfileAvatar from '../../../components/svgs/DefaultProfileAvatar';
import { LikeUser } from '../../bookreviews/services/types';
import LikeUserModal from './LikeUserModal';
import { Buffer } from 'buffer';

interface Props {
  bookreview: Bookreview;
  userID: string;
}

const BookreviewItem = ({ bookreview, userID }: Props) => {
  const { width } = useWindowSize();
  const dispatch = useAppDispatch();
  const bookreviewContent = bookreview.content;
  const bookreviewPublishedAt = bookreview.publishedAt;
  const commentCount = bookreview.commentCount;
  const isMyBookreview = bookreview.user.id === userID;
  const [limit, setLimit] = useState(86);
  const [likeUserIDsCount, setLikeUserIDsCount] = useState(bookreview.likeUserIDs.length);
  const [isOpenMoreList, setOpenMoreList] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isLikeUserListModal, setIsLikeUserListModal] = useState(false);
  const [isAlreadyLikedBookreview, setIsAlreadyLikedBookreview] = useState(bookreview.likeUserIDs.includes(userID));
  const [likeUsers, setLikeUsers] = useState<LikeUser[]>(bookreview.likeUserIDs);

  const {
    colors: { orange900, gray500 },
  } = useTheme();

  useEffect(() => onDismiss, []);

  const toggleEllipsis = (str: string, limit: number) => {
    return {
      string: str.slice(0, limit),
      isShowMore: str.length > limit,
    };
  };

  const onClickMore = (str: string) => {
    setLimit(str.length);
  };

  const goToProfile = () => {
    const buff = Buffer.from(bookreview.user.email, 'utf-8');
    const base64 = buff.toString('base64');
    goToPage(
      `${endpoints.user_page_url}/profile?${
        bookreview.user.email ? `uid=${base64}` : `userName=${bookreview.user.name}`
      }`,
    );
  };

  const onClickMoreList = () => {
    setOpenMoreList(state => !state);
  };

  const MORE_ACTIONS_OF_MY_BOOKREVIEW = [
    {
      text: '삭제하기',
      onAction: () => {
        onDismiss();
        onToggleModal();
      },
    },
    {
      text: '수정하기',
      onAction: () => goToPage(`${endpoints.user_page_url}/bookreviews/edit?bookreviewID=${bookreview.id}`),
    },
    {
      text: '링크 복사하기',
      onAction: () => clip(),
    },
  ];

  const MORE_ACTIONS = [
    {
      text: '링크 복사하기',
      onAction: () => clip(),
    },
  ];

  const clip = () => {
    navigator.clipboard.writeText(`${window.location.href}/show/${bookreview.id}`);
    toastAlert({
      open: true,
      type: 'info',
      text: '링크가 복사되었습니다.',
    });
    onDismiss();
  };

  const onDismiss = () => {
    setOpenMoreList(false);
  };

  const onToggleModal = () => {
    setIsOpenDeleteModal(!isOpenDeleteModal);
  };

  const onConfirmDelete = async () => {
    const resultAction = await dispatch(deleteBookreview.initiate({ id: bookreview.id }));
    if (resultAction.data.deleteBookreview === true) {
      toastAlert({
        open: true,
        type: 'info',
        text: '독후감이 삭제되었습니다.',
      });
      onToggleModal();
    }
  };

  const onClickLikeBookreview = async () => {
    const resultAction = await dispatch(toggleLikeOnBookreview.initiate({ id: bookreview.id, userID }));
    if (resultAction.data.toggleLikeOnBookreviewTemp.bookreview.likeUserIDs.includes(userID)) {
      setIsAlreadyLikedBookreview(true);
    } else {
      setIsAlreadyLikedBookreview(false);
    }
    setLikeUserIDsCount(resultAction.data.toggleLikeOnBookreviewTemp.bookreview.likeUserIDs.length);
  };

  const onClickBookreviewLikeUsers = async () => {
    const resultAction = await dispatch(getBookreviewLikeUsers.initiate({ id: bookreview.id }));
    if (resultAction.data.length === 0 || !resultAction.data) {
      return;
    }
    setLikeUsers(resultAction.data);
    setIsLikeUserListModal(!isLikeUserListModal);
  };

  const bookContent = bookreview.contents.filter((item: Bookreview) => item.type === 'book');
  const movieContent = bookreview.contents.filter((item: Bookreview) => item.type === 'movie');

  const bottomSheetLeftMarginPx = width > 500 ? 'calc(50vw - 250px)' : 0;
  const deleteModalTitle = '정말 삭제하시겠습니까?';
  const deleteModalText = `삭제한 독후감은 복구가 어렵습니다.
  모임일 전에 독후감을 삭제할 경우, 모임 참석이 불가능하다는 점도 꼭 확인해 주세요.`;

  return (
    <>
      <BookreviewItemWrapper>
        <BookreviewItemDiv>
          <ProfileDiv>
            <ProfileAvatarWrapper onClick={() => goToProfile()}>
              {bookreview.user?.profileImageUrl !== null ? (
                <ProfileAvatar src={bookreview.user?.profileImageUrl} size={38} />
              ) : (
                <DefaultProfileAvatar width={38} height={38} />
              )}
            </ProfileAvatarWrapper>
            <NameDiv>
              <UserNameDiv onClick={() => goToProfile()}>{bookreview.user?.name}</UserNameDiv>
              <ClubNameDiv>{bookreview.club?.name}</ClubNameDiv>
            </NameDiv>
          </ProfileDiv>
          <ProfileDiv>
            <UpdatedAtDiv>{elapsedTime(bookreviewPublishedAt)}</UpdatedAtDiv>
            <KebabIcon style={{ cursor: 'pointer' }} onClick={() => onClickMoreList()} />
          </ProfileDiv>
        </BookreviewItemDiv>
        <ClubNameWrapper onClick={() => goToPage(`/bookreviews/show/${bookreview.id}`)}>
          {bookreview.title}
        </ClubNameWrapper>
        <BookreviewContent>
          {toggleEllipsis(stripAllTags(bookreview.content).replace(/<[^>]*>?/g, ''), limit).string}
        </BookreviewContent>
        {toggleEllipsis(stripAllTags(bookreview.content).replace(/<[^>]*>?/g, ''), limit).isShowMore && (
          <ShowMoreButton onClick={() => onClickMore(bookreviewContent)}>...더 보기</ShowMoreButton>
        )}
        <BookMovieDivWrapper>
          {bookContent.length > 0 && (
            <BookMovieDiv>
              <BookMovieSpan>책 | </BookMovieSpan>
              {bookContent[0].author}, {bookContent[0].title}
            </BookMovieDiv>
          )}
          {movieContent.length > 0 && (
            <BookMovieDiv>
              <BookMovieSpan>영화 | </BookMovieSpan>
              {bookContent[0].author && bookContent[0].author + ', '} {movieContent[0].title}
            </BookMovieDiv>
          )}
        </BookMovieDivWrapper>
        <ReactionDivWrapper>
          <ReactionDiv>
            {isAlreadyLikedBookreview ? (
              <>
                <LoveFilledIcon
                  color={orange900}
                  width={20}
                  height={20}
                  style={{ marginRight: '6px', marginTop: '-2px' }}
                  onClick={() => onClickLikeBookreview()}
                />
                <span onClick={() => (likeUserIDsCount > 0 ? onClickBookreviewLikeUsers() : null)}>
                  좋아요 {likeUserIDsCount > 0 ? likeUserIDsCount : null}
                </span>
              </>
            ) : (
              <>
                <HeartIcon
                  onClick={() => onClickLikeBookreview()}
                  color={gray500}
                  width={20}
                  height={20}
                  style={{ marginRight: '6px' }}
                />
                <span onClick={() => (likeUserIDsCount > 0 ? onClickBookreviewLikeUsers() : null)}>
                  좋아요 {likeUserIDsCount > 0 ? likeUserIDsCount : null}
                </span>
              </>
            )}
          </ReactionDiv>
          <ReactionDiv style={{ marginLeft: '16px' }} onClick={() => goToPage(`/bookreviews/show/${bookreview.id}`)}>
            <CommentIcon width={20} height={20} style={{ marginRight: '6px' }} />{' '}
            <span>댓글 {commentCount > 0 ? commentCount : null}</span>
          </ReactionDiv>
        </ReactionDivWrapper>
      </BookreviewItemWrapper>
      <BottomSheet
        open={isOpenMoreList}
        onDismiss={() => setOpenMoreList(state => !state)}
        style={{
          '--rsbs-ml': bottomSheetLeftMarginPx,
          '--rsbs-max-w': '500px',
        }}
      >
        <MoreItems actions={isMyBookreview ? MORE_ACTIONS_OF_MY_BOOKREVIEW : MORE_ACTIONS} />
      </BottomSheet>
      <BaseModal
        title={deleteModalTitle}
        open={isOpenDeleteModal}
        text={deleteModalText}
        onCancel={onToggleModal}
        onConfirm={onConfirmDelete}
      />
      {isLikeUserListModal && (
        <LikeUserModal browserWidth={width} users={likeUsers} onClose={() => setIsLikeUserListModal(false)} />
      )}
    </>
  );
};

const BookreviewItemWrapper = styled.div`
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
`;

const ReactionDivWrapper = styled.div`
  display: flex;
  flex-direction: row;
  ${title4};
  color: ${({ theme }) => theme.colors.gray600};
`;
const ReactionDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  span {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.gray600};
  }
`;
const BookMovieSpan = styled.span`
  ${title6};
  color: ${({ theme }) => theme.colors.gray600};
`;
const BookreviewItemDiv = styled.div`
  flex-direction: row;
  justify-content: space-between;
  display: flex;
`;
const ProfileDiv = styled.div`
  display: flex;
  align-items: center;
`;
const UserNameDiv = styled.div`
  ${title6};
  cursor: pointer;
`;
const ClubNameDiv = styled.div`
  ${title6};
  color: ${({ theme }) => theme.colors.orange900};
  cursor: pointer;
`;
const UpdatedAtDiv = styled.div`
  ${body8};
  margin-right: 4px;
`;
const NameDiv = styled.div`
  margin-left: 10px;
`;
const ClubNameWrapper = styled.div`
  ${heading9};
  margin-top: 24px;
  margin-bottom: 20px;
  cursor: pointer;
`;
const BookMovieDiv = styled.div`
  ${body8};
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.gray600};
`;
const BookMovieDivWrapper = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
`;
const ProfileAvatarWrapper = styled.div`
  cursor: pointer;
`;
const BookreviewContent = styled.div`
  ${contents2};
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  margin-bottom: 20px;
  line-height: 30px;
`;

const ShowMoreButton = styled.div`
  cursor: pointer;
  ${title4};
  color: ${({ theme }) => theme.colors.gray500};
  display: flex;
  justify-content: end;
  margin-top: -51px;
  padding-top: 6px;
`;

export default BookreviewItem;
