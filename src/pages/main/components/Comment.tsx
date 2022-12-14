import styled from '@emotion/styled';
import { BottomSheet } from 'react-spring-bottom-sheet';

import { CommentOutlineIcon } from '@trevari/icons';
import { contents2, title4 } from '@trevari/typo';
import { Divider } from 'pages/curations/curations.styles';
import React, { useEffect, useState } from 'react';
import { BookreviewComment } from 'types/__generate__/user-backend-api';
import ProfileInBookreviewPage from './ProfileInBookreviewPage';
import Kebab from 'components/svgs/Kebab';
import MoreItems from './MoreItems';
import { useWindowSize } from 'utils/windowResize';
import BaseModal from './ModalBase';
import { useAppDispatch } from 'services/store';
import {
  deleteBookreviewComment,
  reportOnBookreviewComment,
  toggleLikeOnBookreviewComment,
} from 'pages/bookreviews/services/api';
import LoveFilled from 'components/svgs/LoveFilled';
import LoveOutline from 'components/svgs/LoveOutline';

interface CommentProps {
  comment: BookreviewComment;
  onClickReply: (name: string, id: string) => void;
  onClickComment: () => void;
  loggedUserID: string;
}
const Comment = ({ comment, onClickReply, onClickComment, loggedUserID }: CommentProps) => {
  const { user, createdAt, content, replies, id, userID, likeUserIDs } = comment;
  const [selectedComment, setSelectedComment] = useState({
    userID: '',
    commentID: '',
  });
  const dispatch = useAppDispatch();
  const { width } = useWindowSize();
  const [modalState, setModalState] = useState({
    deleteReply: false,
    deleteComment: false,
    selectedCommentID: '',
  });
  const { deleteReply, deleteComment, selectedCommentID } = modalState;

  const [isOpenMoreList, setOpenMoreList] = useState(false);
  const onToggleModal = (name: string, id?: string) => {
    setModalState({
      ...modalState,
      [name]: !modalState[name],
      selectedCommentID: id || modalState.selectedCommentID,
    });
  };

  const isMyComment = loggedUserID === selectedComment.userID;

  const MORE_ACTIONS_OF_MY_COMMENT = [
    {
      text: '삭제하기',
      onAction: () => {
        onToggleModal('deleteComment');
        onDismiss();
      },
    },
    {
      text: '수정하기',
      onAction: () => onDismiss(),
    },
  ];

  const MORE_ACTIONS = [
    {
      text: '신고하기',
      onAction: () => {
        dispatch(reportOnBookreviewComment.initiate({ id: selectedComment.commentID, userID: loggedUserID }));
      },
    },
  ];

  const onDismiss = () => {
    setOpenMoreList(state => !state);
  };
  const onConfirmDelete = () => {
    onToggleModal('deleteComment');
    dispatch(deleteBookreviewComment.initiate({ id: selectedComment.commentID }));
  };
  const onConfirmDeleteReply = () => {
    onToggleModal('deleteReply');
    dispatch(deleteBookreviewComment.initiate({ id: selectedCommentID }));
  };
  const onClickMoreButton = (userID: string, commentID: string) => {
    setSelectedComment({
      userID,
      commentID,
    });
    onDismiss();
  };
  const onClickLikeButton = (commentID: string) => {
    dispatch(toggleLikeOnBookreviewComment.initiate({ id: commentID, userID: loggedUserID }));
  };
  useEffect(() => onDismiss, []);
  const bottomSheetLeftMarginPx = width > 500 ? 'calc(50vw - 250px)' : 0;
  const deleteCommentModalText = '댓글을 정말로 삭제하시겠어요?';
  const deleteReplyModalText = '답글을 정말로 삭제하시겠어요?';
  const alreadyLikedComment = likeUserIDs ? likeUserIDs.includes(loggedUserID) : false;
  return (
    <div>
      <ProfileBox>
        <MoreButtonWrapper onClick={() => onClickMoreButton(userID, id)}>
          <Kebab />
        </MoreButtonWrapper>
        <ProfileInBookreviewPage user={user} publishedAt={createdAt} isBookreviewProfile={false} />
      </ProfileBox>
      <Content>{content}</Content>
      <IconWrapper>
        <div onClick={() => onClickLikeButton(id)}>
          {alreadyLikedComment ? (
            <LoveFilled width={20} height={20} strokeColor="#FF7900" />
          ) : (
            <LoveOutline width={20} height={20} />
          )}
        </div>
        <IconText>좋아요 {likeUserIDs.length}</IconText>
        <CommentOutlineIcon />
        <IconText onClick={() => onClickReply(`@${user!.name} `, id)}>답글 쓰기</IconText>
      </IconWrapper>
      <Divider />
      {replies?.map(reply => {
        const { user: replyUser, createdAt: replyCreatedAt, content: replyContent, id: replyID, likeUserIDs } = reply;
        const alreadyLikedReply = likeUserIDs ? likeUserIDs.includes(loggedUserID) : false;
        return (
          <React.Fragment key={replyID}>
            <ReplyBase>
              <ProfileBox>
                <MoreButtonWrapper onClick={() => onClickMoreButton(replyUser.id, replyID)}>
                  <Kebab />
                </MoreButtonWrapper>
                <ProfileInBookreviewPage user={replyUser} publishedAt={replyCreatedAt} isBookreviewProfile={false} />
              </ProfileBox>
              <Content>{replyContent}</Content>
              <IconWrapper>
                <div onClick={() => onClickLikeButton(replyID)}>
                  {alreadyLikedReply ? (
                    <LoveFilled width={20} height={20} strokeColor="#FF7900" />
                  ) : (
                    <LoveOutline width={20} height={20} />
                  )}
                </div>
                <IconText>좋아요 {likeUserIDs?.length || 0}</IconText>
                <CommentOutlineIcon />
                <IconText onClick={() => onClickReply(`@${replyUser!.name} `, id)}>답글 쓰기</IconText>
              </IconWrapper>
            </ReplyBase>
            <Divider />
          </React.Fragment>
        );
      })}
      <BottomSheet
        open={isOpenMoreList}
        onDismiss={onDismiss}
        style={{
          '--rsbs-ml': bottomSheetLeftMarginPx,
          '--rsbs-max-w': '500px',
        }}
      >
        <MoreItems actions={isMyComment ? MORE_ACTIONS_OF_MY_COMMENT : MORE_ACTIONS} />
      </BottomSheet>
      <BaseModal
        open={deleteComment}
        text={deleteCommentModalText}
        onCancel={() => onToggleModal('deleteComment')}
        onConfirm={onConfirmDelete}
      />
      <BaseModal
        open={deleteReply}
        text={deleteReplyModalText}
        onCancel={() => onToggleModal('deleteReply')}
        onConfirm={onConfirmDeleteReply}
      />
    </div>
  );
};
const ReplyBase = styled.div`
  padding-left: 48px;
`;
const IconWrapper = styled.div`
  display: flex;
  padding: 0 20px 20px 20px;
  align-items: center;
`;
const IconText = styled.span`
  ${title4};
  color: ${({ theme }) => theme.colors.gray600};
  margin: 0 14px 0 4px;

  cursor: pointer;
`;
const Content = styled.div`
  ${contents2};
  padding: 0 20px 20px;
`;
const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row-reverse;
  padding-right: 20px;
`;
const MoreButtonWrapper = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export default Comment;
