import styled from '@emotion/styled';
import { heading7 } from '@trevari/typo';
import CloseIcon from 'components/svgs/CloseIcon';
import { LikeUser } from 'pages/bookreviews/services/types';
import { Divider } from 'pages/curations/curations.styles';
import React from 'react';
import ProfileInLikeUserModal from './ProfileInLikeUserModal';

interface LikeUserModalProps {
  users: LikeUser[];
  onClose: () => void;
  browserWidth?: number;
  onClickUser: ((user: LikeUser) => void);
}
const LikeUserModal = ({ users, onClose, browserWidth, onClickUser }: LikeUserModalProps) => {
  const modalPositionLeftPx = browserWidth && browserWidth > 500 ? (browserWidth - 500) / 2 : 0;
  return (
    <ModalContainer modalPositionLeftPx={modalPositionLeftPx}>
      <CloseButtonWrapper onClick={onClose}>
        <CloseIcon />
      </CloseButtonWrapper>
      <LikeUserCount>좋아요 {users.length}</LikeUserCount>
      <Divider />
      {users.map(user => (
        <React.Fragment key={user.id}>
          <ProfileInLikeUserModal user={user} onClickUser={() => onClickUser(user)}/>
          <Divider />
        </React.Fragment>
      ))}
    </ModalContainer>
  );
};

const ModalContainer = styled.div<{ modalPositionLeftPx: number }>`
  position: fixed;
  overflow-y: scroll;
  top: 0;
  bottom: 0;
  left: ${({ modalPositionLeftPx }) => (modalPositionLeftPx ? `${modalPositionLeftPx}px` : 0)};
  right: 0;
  max-width: 500px;
  background-color: white;
  z-index: 1000;
  padding: 12px 0 20px;
`;

const CloseButtonWrapper = styled.div`
  margin-bottom: 12px;
  padding-right: 20px;
  float: right;
  svg {
    cursor: pointer;
  }
`;

const LikeUserCount = styled.div`
  ${heading7};
  clear: both;
  padding-left: 20px;
  margin: 16px 0;
`;
export default LikeUserModal;
