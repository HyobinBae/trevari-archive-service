import styled from '@emotion/styled';
import { CommentOutlineIcon } from '@trevari/icons';
import { body4, body5, body6, title4 } from '@trevari/typo';
import LoveFilled from 'components/svgs/LoveFilled';
import LoveOutline from 'components/svgs/LoveOutline';
import { useWindowSize } from 'hooks/useWindowSize';
import { createBookreviewComment } from 'pages/bookreviews/services/api';
import { Divider } from 'pages/curations/curations.styles';
import { useRef, useState } from 'react';
import { useAppDispatch } from 'services/store';
import { BookreviewComment, User } from 'types/__generate__/user-backend-api';
import { DEFAULT_PROFILE_IMAGE } from '../const';
import Comment from './Comment';
import BaseModal from './ModalBase';

const BookreviewComments = ({
  likeUserIDs,
  comments,
  user,
  bookreviewID,
}: {
  likeUserIDs: string[];
  comments: BookreviewComment[];
  user: User;
  bookreviewID: string;
}) => {
  const { width } = useWindowSize();
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedCommentID, setSelectedCommentID] = useState('');
  const [modalState, setModalState] = useState({
    replyConfirm: false,
    deleteComment: false,
  });
  const [commentText, setCommentText] = useState('');
  const { replyConfirm, deleteComment } = modalState;
  // const {}
  const [targetState, setTargetState] = useState({
    type: 'comment',
    targetParentCommentID: '',
    targetUsername: '',
    targetReplyID: '',
  });
  const { type, targetParentCommentID } = targetState;
  const bottomInputContentWidth = width > 500 ? '500px' : '100%';
  const alreadyLikedBookrivew = likeUserIDs.includes(user.id);
  const onToggleModal = (name: string) => {
    setModalState({
      ...modalState,
      [name]: !modalState[name],
    });
  };
  const onClickReply = (name: string, id: string) => {
    setTargetState({
      ...targetState,
      type: 'reply',
      targetUsername: name,
      targetParentCommentID: id,
    });
    if (commentText) {
      onToggleModal('replyConfirm');
      return;
    }
    onChangeInput(name);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const onClickComment = () => {
    setTargetState({ ...targetState, type: 'reply', targetUsername: '', targetParentCommentID: '' });
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const onChangeInput = (value: string) => {
    setCommentText(value);
  };
  const onConfirm = () => {
    onChangeInput(targetState.targetUsername);
    onToggleModal('replyConfirm');

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const onSubmit = () => {
    const input = {
      bookreviewID,
      content: commentText,
      userID: user.id,
    };

    if (targetParentCommentID) {
      Object.assign(input, { parentID: targetParentCommentID });
    }
    dispatch(createBookreviewComment.initiate({ input }));
    onChangeInput('');
  };
  const replyConfirmModalText = `작성중인 내용이 있습니다.\n그래도 취소하시겠습니까?\n작성한 내용은 모두 사라집니다.`;
  return (
    <>
      <IconBox>
        {alreadyLikedBookrivew ? (
          <LoveFilled width={20} height={20} strokeColor="#FF7900" />
        ) : (
          <LoveOutline width={20} height={20} />
        )}
        <IconText>좋아요 {likeUserIDs.length}</IconText>
        <CommentOutlineIcon />
        <IconText onClick={onClickComment}>댓글 {comments.length || 0}</IconText>
      </IconBox>
      <Divider />
      <CommentsCountText>총 {comments.length} 개의 댓글</CommentsCountText>
      <CommentContainer>
        {comments.map(comment => (
          <Comment
            key={comment.id}
            comment={comment}
            onClickReply={onClickReply}
            onClickComment={onClickComment}
            loggedUserID={user.id}
          />
        ))}
      </CommentContainer>
      <InputContainer width={bottomInputContentWidth}>
        <ProfileImage src={user.profileImageUrl || DEFAULT_PROFILE_IMAGE} />
        <Input
          ref={inputRef}
          placeholder="댓글을 입력하세요."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInput(e.currentTarget.value)}
          value={commentText}
        />
        <button onClick={onSubmit}>제출</button>
      </InputContainer>
      <BaseModal
        open={replyConfirm}
        text={replyConfirmModalText}
        onCancel={() => onToggleModal('replyConfirm')}
        onConfirm={onConfirm}
      />
    </>
  );
};

const CommentContainer = styled.div`
  padding-bottom: 80px;
`;
const InputContainer = styled.div<{ width: string }>`
  position: fixed;
  display: flex;
  bottom: 0;
  padding: 16px 20px;
  gap: 12px;
  background-color: white;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.gray300};
  width: ${({ width }) => (width ? width : '100%')};
`;

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const Input = styled.input`
  ${body4}
  width: 100%;
  display: inline-flex;
  padding: 0.75rem 1rem;
  min-height: 3.125rem;

  border-radius: 0.1875rem;
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  &:not([disabled]):hover {
    color: ${({ theme }) => theme.colors.gray600};
    border-color: ${({ theme }) => theme.colors.gray600};
  }
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
    font: inherit;
    transition: all 150ms;
  }
  &:focus {
    // border-color: ${({ theme }) => theme.colors.black};
    border-color: black;
  }
`;
const ModalText = styled.p`
  margin: unset;
  ${body5};
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 24px;
`;
const CommentsCountText = styled.span`
  ${body6};
  color: ${({ theme }) => theme.colors.gray600};
  display: block;
  padding: 40px 0 0 20px;
`;

const IconBox = styled.div`
  display: flex;
  padding: 20px;
`;
const IconText = styled.span`
  color: ${({ theme }) => theme.colors.gray600};
  margin: 0 14px 0 4px;
  ${title4};
`;
export default BookreviewComments;
