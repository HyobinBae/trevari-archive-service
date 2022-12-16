import React, { useEffect, useState } from 'react';
import { Bookreview, ClubRole } from '../../../types/__generate__/user-backend-api';
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
import { deleteBookreview } from '../../bookreviews/services/api';
import BaseModal from './ModalBase';
import { useAppDispatch } from '../../../services/store';
import DefaultProfileAvatar from '../../../components/svgs/DefaultProfileAvatar';

interface Props {
  bookreview: Bookreview
}

const BookreviewItem = ({ bookreview }: Props) => {
  const bookreviewContent = bookreview.content;
  const bookreviewPublishedAt = bookreview.publishedAt;// '2020-12-14 09:24:59.000000 +00:00';
  const heartCount = bookreview.likeUserIDs.length;
  const commentCount = bookreview.commentCount; // 댓글수 + 답글수
  const isLike = false;
  const { width } = useWindowSize();
  const dispatch = useAppDispatch();
  const isMyBookreview = false;
  const [limit, setLimit] = useState(87);
  const [isOpenMoreList, setOpenMoreList] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const {
    colors: { orange900, gray500 },
  } = useTheme();

  const toggleEllipsis = (str: string, limit: number) => {
    return {
      string: str.slice(0, limit),
      isShowMore: str.length > limit
    }
  };

  const onClickMore = (str: string) => {
    setLimit(str.length);
  };

  // const goToProfile = () => {
  //   // `/profile?${
  //   //   comment.user!.email
  //   //     ? `uid=${Buffer.from(comment.user!.email).toString('base64')}`
  //   //     : `userName=${comment.user!.name}`
  // };

  const reportBookreviews = () => {
    console.log('신고하기');
    setOpenMoreList(state => !state)
  }

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
      onAction: () => goToPage(`${endpoints.user_page_url}/bookreviews/edit?bookreviewID=${bookreviewID}`),
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
    navigator.clipboard.writeText(window.location.href);
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
    const resultAction = await dispatch(deleteBookreview.initiate({ id: bookreviewID }));
    if (resultAction.data.deleteBookreview === true) {
      toastAlert({
        open: true,
        type: 'info',
        text: '독후감이 삭제되었습니다.',
      });
      // TODO: home -> 독후감 리스트 페이지
      setTimeout(() => {
        goToPage('/');
        onToggleModal();
      }, 1000);
    }
  };
  useEffect(() => onDismiss, []);

  const bookContent = bookreview.contents.filter(( item: Bookreview ) => item.type === 'book');
  const movieContent = bookreview.contents.filter(( item: Bookreview ) => item.type === 'movie');

  const bottomSheetLeftMarginPx = width > 500 ? 'calc(50vw - 250px)' : 0;
  const deleteModalTitle = '정말 삭제하시겠습니까?';
  const deleteModalText = `삭제한 독후감은 복구가 어렵습니다.
  모임일 전에 독후감을 삭제할 경우, 모임 참석이 불가능하다는 점도 꼭 확인해 주세요.`;

  return (
    <>
      <BookreviewItemWrapper>
        <BookreviewItemDiv>
          <ProfileDiv>
            <ProfileAvatarWrapper onClick={() => console.log('유저 프로필 페이지로~')}>
              {bookreview.user?.profileImageUrl !== null ? <ProfileAvatar src={bookreview.user?.profileImageUrl} size={38}/> : <DefaultProfileAvatar width={38} height={38}/>}
            </ProfileAvatarWrapper>
            <NameDiv>
              <UserNameDiv onClick={() => console.log('유저 프로필 페이지로~')}>{bookreview.user?.name}</UserNameDiv>
              <ClubNameDiv onClick={() => console.log('클럽 상세 페이지로?')}>{bookreview.club?.name}</ClubNameDiv>
            </NameDiv>
          </ProfileDiv>
          <ProfileDiv>
            <UpdatedAtDiv>{elapsedTime(bookreviewPublishedAt)}</UpdatedAtDiv>
            <KebabIcon onClick={() => reportBookreviews()}/>
          </ProfileDiv>
        </BookreviewItemDiv>
        <ClubNameWrapper>
          {bookreview.club.name}
        </ClubNameWrapper>
        {/*<div style={{height: '90px', overflow: 'hidden'}} dangerouslySetInnerHTML={{ __html: toggleEllipsis(bookreview.content, limit).string.replace(/<[^>]*>?/g, '')|| '' }} />*/}
        {toggleEllipsis(stripAllTags(bookreview.content), limit).string.replace(/<[^>]*>?/g, '')}
        {/*{toggleEllipsis(bookreviewContent.content, limit).string}*/}
        {toggleEllipsis(stripAllTags(bookreview.content), limit).isShowMore && <ShowMoreButton onClick={() => onClickMore(bookreviewContent)}>...더보기</ShowMoreButton>}
        {/*<BookreviewContent>*/}
        {/*  {toggleEllipsis(bookreview.content, limit).string}*/}
        {/*  {toggleEllipsis(bookreview.content, limit).isShowMore && <ShowMoreButton onClick={() => onClickMore(bookreviewContent)}>...더보기</ShowMoreButton>}*/}
        {/*</BookreviewContent>*/}
        <BookMovieDivWrapper>
          {bookContent.length > 0 && <BookMovieDiv><BookMovieSpan>책 | </BookMovieSpan>{bookContent[0].author}, {bookContent[0].title}</BookMovieDiv>}
          {movieContent.length > 0 && <BookMovieDiv><BookMovieSpan>영화 | </BookMovieSpan>{movieContent[0].title}</BookMovieDiv>}
        </BookMovieDivWrapper>
        <ReactionDivWrapper>
          <ReactionDiv>
            {isLike ? <><LoveFilledIcon color={orange900} width={20} height={20} style={{marginRight: '6px'}}/> <span onClick={() => console.log('좋아요 리스트페이지로')}>좋아요 {heartCount}</span></> : <><HeartIcon onClick={() => console.log('좋아요 반영~')} color={gray500} width={20} height={20} style={{marginRight: '6px'}}/> <span onClick={() => console.log('좋아요 리스트페이지로')}>좋아요 {heartCount}</span></>}
          </ReactionDiv>
          <ReactionDiv style={{marginLeft: '16px'}} onClick={() => console.log('댓글 클릭~')}>
            <CommentIcon width={20} height={20} style={{marginRight: '6px'}}/> <span>댓글 {commentCount}</span>
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
        <MoreItems actions={!isMyBookreview ? MORE_ACTIONS_OF_MY_BOOKREVIEW : MORE_ACTIONS} />
      </BottomSheet>
      <BaseModal
        title={deleteModalTitle}
        open={isOpenDeleteModal}
        text={deleteModalText}
        onCancel={onToggleModal}
        onConfirm={onConfirmDelete}
      />
      </>
  )
};

const BookreviewItemWrapper = styled.div`
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid ${({theme}) => theme.colors.gray300};
`;

const ReactionDivWrapper = styled.div`
  display: flex;
  flex-direction: row;
  ${title4};
  color: ${({theme}) =>  theme.colors.gray600};
`;
const ReactionDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  span {
    cursor: pointer;
    color: ${({theme}) => theme.colors.gray600};
  }
`;
const BookMovieSpan = styled.span`
  ${title6};
  color: ${({theme}) => theme.colors.gray600};
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
  color: ${({theme}) => theme.colors.orange900};
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
`;
const BookMovieDiv = styled.div`
  ${body8};
  color: ${({theme}) => theme.colors.gray600};
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
`;

const ShowMoreButton = styled.div`
  cursor: pointer;
  ${title4};
  color: ${({theme}) => theme.colors.gray500};
  display: flex;
  justify-content: end;
  margin-top: -25px;
`;


export default BookreviewItem;
