import styled from '@emotion/styled';

import { Button, Modal } from '@trevari/components';
import { body5, heading9 } from '@trevari/typo';

interface ModalProps {
  open: boolean;
  title?: string;
  text: string;
  onCancel: () => void;
  onConfirm: () => void;
}
const BaseModal = ({ open, title, text, onCancel, onConfirm }: ModalProps) => (
  <Modal open={open}>
    {title && <ModalTitle>{title}</ModalTitle>}
    <ModalText>{text}</ModalText>
    <ButtonWrapper>
      <Button color="dark" variant="weak" colorVariant="dark" onClick={onCancel}>
        취소
      </Button>
      <Button onClick={onConfirm}>확인</Button>
    </ButtonWrapper>
  </Modal>
);

const ModalText = styled.p`
  margin: unset;
  ${body5};
  white-space: pre-line;
`;

const ModalTitle = styled.h3`
  margin: unset;
  ${heading9}
  margin-bottom: 24px;
  white-space: pre-line;
`;
const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 24px;
`;
export default BaseModal;