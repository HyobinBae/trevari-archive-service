import styled from '@emotion/styled';
import { body4, body6, title4 } from '@trevari/typo';
import CommentOutline from 'components/svgs/CommentOutline';
import LoveFilled from 'components/svgs/LoveFilled';
import LoveOutline from 'components/svgs/LoveOutline';
import UploadActive from 'components/svgs/UploadActive';
import UploadDefault from 'components/svgs/UploadDefault';
import { useWindowSize } from 'hooks/useWindowSize';
import {
  createBookreviewComment,
  getBookreviewLikeUsers,
  toggleLikeOnBookreview,
} from 'pages/bookreviews/services/api';
import { LikeUser } from 'pages/bookreviews/services/types';
import { Divider } from 'pages/curations/curations.styles';
import { useRef, useState } from 'react';
import { useAppDispatch } from 'services/store';
import { toastAlert } from 'services/ui.store';
import {BookreviewComment, User} from 'types/__generate__/user-backend-api';
import Comment from './Comment';
import LikeUserModal from './LikeUserModal';
import BaseModal from './ModalBase';
import {isNil, isEmpty} from "lodash";

const initialTargetState = {
  type: 'comment',
  targetParentCommentID: '',
  targetUsername: '',
  targetReplyID: '',
};



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
  const filterComments = (comments: BookreviewComment[]): BookreviewComment[] => {
    const res: BookreviewComment[] = []
    for(const comment of comments) {
      // 첫번째 댓글인데 삭제됐고, 답글이 없는 경우
      if( !isNil(comment.deletedAt) && isNil(comment.parentID) && isEmpty(comment.replies) ) {
        continue
      }
      res.push(comment)
    }
    return res
  }

  const { width } = useWindowSize();
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [likeUsers, setLikeUsers] = useState<LikeUser[]>([]);
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const [modalState, setModalState] = useState({
    replyConfirm: false,
    deleteComment: false,
    likeUserList: false,
  });
  const [commentText, setCommentText] = useState('');
  const { replyConfirm, likeUserList } = modalState;
  const [targetState, setTargetState] = useState(initialTargetState);
  const { targetParentCommentID } = targetState;
  const bottomInputContentWidth = width > 500 ? '500px' : '100%';
  const alreadyLikedBookrivew = likeUserIDs.includes(user.id);
  const onToggleModal = (name: string) => {
    setModalState({
      ...modalState,
      [name]: !modalState[name],
    });
  };
  const onClickLikeBookreview = () => {
    dispatch(toggleLikeOnBookreview.initiate({ id: bookreviewID, userID: user.id }));
  };
  const onClickBookreviewLikeUsers = async () => {
    const resultAction = await dispatch(getBookreviewLikeUsers.initiate({ id: bookreviewID }));
    if (resultAction.data.length === 0 || !resultAction.data) {
      return;
    }
    setLikeUsers(resultAction.data);
    onToggleModal('likeUserList');
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
    if (inputRef.current) {
      inputRef.current.scrollTop = inputRef.current.scrollHeight;
      inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
    }
  };
  const onConfirm = () => {
    onChangeInput(targetState.targetUsername);
    onToggleModal('replyConfirm');

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const onSubmit = () => {
    if (!focused || !commentText) return;

    const input = {
      bookreviewID,
      content: commentText,
      userID: user.id,
    };

    if (targetParentCommentID) {
      Object.assign(input, { parentID: targetParentCommentID });
    }
    dispatch(createBookreviewComment.initiate({ input }));
    toastAlert({
      open: true,
      type: 'info',
      text: '댓글이 등록되었습니다.',
    });
    onChangeInput('');
    setTargetState(initialTargetState);
  };
  const onKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key !== 'Enter') {
      return;
    }
    if (e.shiftKey) {
      return;
    }
    onSubmit();
  };
  const filteredComments = filterComments(comments)
  const replyConfirmModalText = `작성중인 내용이 있습니다.\n그래도 취소하시겠습니까?\n작성한 내용은 모두 사라집니다.`;
  return (
    <>
      <IconBox>
        <div onClick={onClickLikeBookreview}>
          {alreadyLikedBookrivew ? (
            <LoveFilled width={20} height={20} strokeColor="#FF7900" />
          ) : (
            <LoveOutline width={20} height={20} />
          )}
        </div>
        <IconText onClick={onClickBookreviewLikeUsers} isClickable={likeUserIDs.length > 0}>
          좋아요 {likeUserIDs.length}
        </IconText>
        <div onClick={onClickComment}>
          <CommentOutline />
          <IconText isClickable={true}>댓글 {filteredComments.length || 0}</IconText>
        </div>
      </IconBox>
      <Divider />
      <CommentContainer>
        {filteredComments.map(comment => (
          <Comment
            key={comment.id}
            comment={comment}
            onClickReply={onClickReply}
            loggedUserID={user.id}
          />
        ))}
      </CommentContainer>
      <InputContainer width={bottomInputContentWidth}>
        <CustomTextArea
          ref={inputRef}
          placeholder="댓글을 입력하세요."
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChangeInput(e.currentTarget.value)}
          value={commentText}
          onFocus={onFocus}
          onBlur={onBlur}
          id="input"
          onKeyUp={onKeyUp}
          rows={1}
        />
        <label htmlFor="input" onMouseDown={onSubmit}>
          {focused ? <UploadActive /> : <UploadDefault />}
        </label>
      </InputContainer>
      <BaseModal
        open={replyConfirm}
        text={replyConfirmModalText}
        onCancel={() => onToggleModal('replyConfirm')}
        onConfirm={onConfirm}
      />
      {likeUserList && (
        <LikeUserModal browserWidth={width} users={likeUsers} onClose={() => onToggleModal('likeUserList')} />
      )}
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
  padding: 0 20px 0;
  gap: 12px;
  background-color: white;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.gray300};
  width: ${({ width }) => (width ? width : '100%')};

  label {
    cursor: pointer;
    height: 32px;
  }
`;

const CustomTextArea = styled.textarea`
  ${body4}
  min-height: 32px;
  max-height: 101px;
  resize: none;
  border: none;
  flex: 1;
  outline: none;
  display: block;
  margin: 20px 0;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
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
  align-items: center;
  div {
    height: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;
const IconText = styled.span<{ isClickable: boolean }>`
  color: ${({ theme }) => theme.colors.gray600};
  margin: 0 14px 0 4px;
  ${title4};
  cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'default')};
`;

export default BookreviewComments;
