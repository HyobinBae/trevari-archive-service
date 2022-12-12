import styled from '@emotion/styled';
import { Button, Modal } from '@trevari/components';
import ModalBase from '@trevari/components/lib/Modal/ModalBase';
import { CommentOutlineIcon } from '@trevari/icons';
import { body4, body5, body6, title4 } from '@trevari/typo';
import LoveFilled from 'components/svgs/LoveFilled';
import LoveOutline from 'components/svgs/LoveOutline';
import { useWindowSize } from 'hooks/useWindowSize';
import { Divider } from 'pages/curations/curations.styles';
import { useRef, useState } from 'react';
import { BookreviewComment, User } from 'types/__generate__/user-backend-api';
import { DEFAULT_PROFILE_IMAGE } from '../const';
import Comment from './Comment';

const BookreviewComments = ({
  likeUserIDs,
  comments,
  user,
}: {
  likeUserIDs: string[];
  comments: BookreviewComment[];
  user: User;
}) => {
  const { width } = useWindowSize();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [inputState, setInputState] = useState({
    type: 'comment',
    value: '',
    targetCommentID: '',
    targetUsername: '',
  });
  const { type, value, targetCommentID } = inputState;
  const bottomInputContentWidth = width > 500 ? '500px' : '100%';
  const alreadyLikedBookrivew = likeUserIDs.includes(user.id);
  const onToggleModal = () => {
    setIsOpenModal(prev => !prev);
  };
  const onClickReply = (name: string, id: string) => {
    setInputState({
      ...inputState,
      targetUsername: name,
      targetCommentID: id,
    });
    if (value) {
      onToggleModal();
      return;
    }
    onChangeInput('value', name);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const onChangeInput = (name: string, value: string) => {
    setInputState({
      ...inputState,
      [name]: value,
    });
  };
  const onConfirm = () => {
    onChangeInput('value', inputState.targetUsername);
    setIsOpenModal(prev => !prev);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
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
        <IconText>댓글 {comments.length || 0}</IconText>
      </IconBox>
      <Divider />
      <CommentsCountText>총 {comments.length} 개의 댓글</CommentsCountText>
      <CommentContainer>
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} onClickReply={onClickReply} />
        ))}
      </CommentContainer>
      <InputContainer width={bottomInputContentWidth}>
        <ProfileImage src={user.profileImageUrl || DEFAULT_PROFILE_IMAGE} />
        <Input
          ref={inputRef}
          placeholder="댓글을 입력하세요."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInput('value', e.currentTarget.value)}
          value={inputState.value}
        />
      </InputContainer>
      <Modal open={isOpenModal}>
        <ModalText>
          작성중인 내용이 있습니다.
          <br />
          그래도 취소하시겠습니까?
          <br />
          작성한 내용은 모두 사라집니다.
        </ModalText>
        <ButtonWrapper>
          <Button color="dark" variant="weak" colorVariant="dark" onClick={onToggleModal}>
            취소
          </Button>
          <Button onClick={onConfirm}>확인</Button>
        </ButtonWrapper>
      </Modal>
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
