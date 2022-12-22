import styled from '@emotion/styled';
import {Button, TextArea} from '@trevari/components';
import {heading7} from '@trevari/typo';
import CloseIcon from 'components/svgs/CloseIcon';
import React, {useState} from 'react';
import BaseModal from "./ModalBase";

interface EditCommentModalProps {
  text: string;
  onClose: () => void;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onConfirm: () => void;
  browserWidth?: number;
}

const initialModalState = {
  cancelComment: false,
};

const EditCommentModal = ({ text, onClose, onChange, onConfirm, browserWidth }: EditCommentModalProps) => {
  const modalPositionLeftPx = browserWidth && browserWidth > 500 ? (browserWidth - 500) / 2 : 0;

  const [modalState, setModalState] = useState(initialModalState);
  const { cancelComment } = modalState;

  const onToggleModal = (name: string) => {
    setModalState({
      ...modalState,
      [name]: !modalState[name],
    });
  };

  const editCancelModalText = `수정 중인 내용이 있습니다.\n그래도 취소하시겠습니까?\n수정한 내용은 사라집니다.`;

  return (
    <ModalContainer modalPositionLeftPx={modalPositionLeftPx}>
      <CloseButtonWrapper onClick={() => onToggleModal('deleteComment')}>
        <CloseIcon />
      </CloseButtonWrapper>
      <EditCommentTitle>댓글 수정하기</EditCommentTitle>
      <TextAreaContainer>
        <TextArea onChange={onChange} value={text}></TextArea>
        <FloatingButton onClick={onConfirm}>등록</FloatingButton>
      </TextAreaContainer>
      <BaseModal
        open={cancelComment}
        text={editCancelModalText}
        onCancel={() => onToggleModal('deleteComment')}
        onConfirm={onClose}
      />
    </ModalContainer>
  );
};

const ModalContainer = styled.div<{ modalPositionLeftPx: number }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: ${({ modalPositionLeftPx }) => (modalPositionLeftPx ? `${modalPositionLeftPx}px` : 0)};
  right: 0;
  max-width: 500px;
  background-color: white;
  z-index: 1000;
  padding: 12px 20px 20px;
`;

const CloseButtonWrapper = styled.div`
  margin-bottom: 12px;
  float: right;
  svg {
    cursor: pointer;
  }
`;

const EditCommentTitle = styled.div`
  ${heading7};
  clear: both;
  margin: 16px 0;
`;

const TextAreaContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  .textarea-base {
    padding-bottom: 60px;
  }
`;

const FloatingButton = styled(Button)`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
export default EditCommentModal;
