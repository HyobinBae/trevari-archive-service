import styled from '@emotion/styled';
import { BottomSheet } from 'react-spring-bottom-sheet';

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
  getBookreviewCommentLikeUsers,
  reportOnBookreviewComment,
  toggleLikeOnBookreviewComment,
  updateBookreviewComment,
} from 'pages/bookreviews/services/api';
import LoveFilled from 'components/svgs/LoveFilled';
import LoveOutline from 'components/svgs/LoveOutline';
import CommentOutline from 'components/svgs/CommentOutline';
import { LikeUser } from 'pages/bookreviews/services/types';
import LikeUserModal from './LikeUserModal';
import { toastAlert } from 'services/ui.store';
import EditCommentModal from './EditCommentModal';

interface CommentProps {
  comment: BookreviewComment;
  onClickReply: (name: string, id: string) => void;
  loggedUserID: string;
}

const initialModalState = {
  deleteReply: false,
  deleteComment: false,
  likeUserList: false,
  reportComment: false,
  editComment: false,
  selectedCommentID: '',
};
const Comment = ({ comment, onClickReply, loggedUserID }: CommentProps) => {
  const { user, createdAt, content, replies, id, userID, likeUserIDs } = comment;
  const [selectedComment, setSelectedComment] = useState({
    userID: '',
    commentID: '',
    text: '',
  });
  const [likeUsers, setLikeUsers] = useState<LikeUser[]>([]);

  const dispatch = useAppDispatch();
  const { width } = useWindowSize();
  const [modalState, setModalState] = useState(initialModalState);
  const { deleteReply, deleteComment, likeUserList, reportComment, editComment } = modalState;

  const [isOpenMoreList, setOpenMoreList] = useState(false);
  const onToggleModal = (name: string, id?: string) => {
    setModalState({
      ...modalState,
      [name]: !modalState[name],
      selectedCommentID: id || modalState.selectedCommentID,
    });
  };
  const onClickBookreviewLikeUsers = async (id: string) => {
    const resultAction = await dispatch(getBookreviewCommentLikeUsers.initiate({ id }));
    if (resultAction.data.length === 0 || !resultAction.data) {
      return;
    }
    setLikeUsers(resultAction.data);
    onToggleModal('likeUserList');
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
      onAction: () => {
        onToggleModal('editComment');
        onDismiss();
      },
    },
  ];

  const MORE_ACTIONS = [
    {
      text: '신고하기',
      onAction: () => {
        onToggleModal('reportComment');
        onDismiss();
      },
    },
  ];

  const onDismiss = () => {
    setOpenMoreList(state => !state);
  };
  const onConfirmDelete = async () => {
    const resultAction = await dispatch(deleteBookreviewComment.initiate({ id: selectedComment.commentID }));
    if (resultAction.data.deleteBookreviewComment === true) {
      toastAlert({
        open: true,
        type: 'info',
        text: '댓글이 삭제되었습니다.',
      });
      onToggleModal('deleteComment');
    }
  };
  const onConfirmDeleteReply = async () => {
    const resultAction = await dispatch(deleteBookreviewComment.initiate({ id: selectedComment.commentID }));
    if (resultAction.data.deleteBookreviewComment === true) {
      toastAlert({
        open: true,
        type: 'info',
        text: '답글이 삭제되었습니다.',
      });
      onToggleModal('deleteReply');
    }
  };
  const onConfirmReport = async () => {
    await dispatch(reportOnBookreviewComment.initiate({ id: selectedComment.commentID, userID: loggedUserID }));
    toastAlert({
      open: true,
      type: 'info',
      text: '신고가 접수되었습니다.',
    });
    onToggleModal('reportComment');
  };
  const onClickMoreButton = (userID: string, commentID: string, text: string) => {
    setSelectedComment({
      userID,
      commentID,
      text,
    });
    onDismiss();
  };
  const onClickLikeButton = (commentID: string) => {
    dispatch(toggleLikeOnBookreviewComment.initiate({ id: commentID, userID: loggedUserID }));
  };
  const onConfirmEditComment = () => {
    const input = {
      id: selectedComment.commentID,
      content: selectedComment.text,
    };
    dispatch(updateBookreviewComment.initiate({ input }));
    toastAlert({
      open: true,
      type: 'info',
      text: '댓글이 수정되었습니다.',
    });
    onToggleModal('editComment');
  };
  const onChagneCommentText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedComment({
      ...selectedComment,
      text: e.currentTarget.value,
    });
  };
  useEffect(() => {
    return () => {
      setOpenMoreList(false);
      setModalState(initialModalState);
    };
  }, []);

  const bottomSheetLeftMarginPx = width > 500 ? 'calc(50vw - 250px)' : 0;
  const deleteCommentModalText = '댓글을 정말로 삭제하시겠어요?';
  const deleteReplyModalText = '답글을 정말로 삭제하시겠어요?';
  const reportModalText = '신고하시겠습니까?';
  const alreadyLikedComment = likeUserIDs ? likeUserIDs.includes(loggedUserID) : false;
  return (
    <div>
      <ProfileBox>
        <MoreButtonWrapper onClick={() => onClickMoreButton(userID, id, content)}>
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
        <IconText isClickable={likeUserIDs.length > 0} onClick={() => onClickBookreviewLikeUsers(id)}>
          좋아요 {likeUserIDs.length}
        </IconText>
        <div onClick={() => onClickReply(`@${user?.name} `, id)}>
          <CommentOutline />
          <IconText isClickable={true}>답글 쓰기</IconText>
        </div>
      </IconWrapper>
      <Divider />
      {replies?.map(reply => {
        const { user: replyUser, createdAt: replyCreatedAt, content: replyContent, id: replyID, likeUserIDs } = reply;
        const alreadyLikedReply = likeUserIDs ? likeUserIDs.includes(loggedUserID) : false;
        return (
          <React.Fragment key={replyID}>
            <ReplyBase>
              <ProfileBox>
                <MoreButtonWrapper onClick={() => onClickMoreButton(replyUser.id, replyID, replyContent)}>
                  <Kebab />
                </MoreButtonWrapper>
                <ProfileInBookreviewPage user={replyUser} publishedAt={replyCreatedAt} />
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
                <IconText
                  isClickable={likeUserIDs && likeUserIDs.length > 0}
                  onClick={() => onClickBookreviewLikeUsers(replyID)}
                >
                  좋아요 {likeUserIDs?.length || 0}
                </IconText>
                <div onClick={() => onClickReply(`@${replyUser?.name} `, id)}>
                  <CommentOutline />
                  <IconText isClickable={true}>답글 쓰기</IconText>
                </div>
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
      <BaseModal
        open={reportComment}
        text={reportModalText}
        onCancel={() => onToggleModal('reportComment')}
        onConfirm={onConfirmReport}
      />
      {likeUserList && (
        <LikeUserModal users={likeUsers} onClose={() => onToggleModal('likeUserList')} browserWidth={width} />
      )}
      {editComment && (
        <EditCommentModal
          text={selectedComment.text}
          onClose={() => onToggleModal('editComment')}
          onChange={onChagneCommentText}
          onConfirm={onConfirmEditComment}
          browserWidth={width}
        />
      )}
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
  div {
    height: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;
const IconText = styled.span<{ isClickable: boolean }>`
  ${title4};
  color: ${({ theme }) => theme.colors.gray600};
  margin: 0 14px 0 4px;

  cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'default')};
`;
const Content = styled.div`
  ${contents2};
  padding: 0 20px 20px;
  word-break: break-all;
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
