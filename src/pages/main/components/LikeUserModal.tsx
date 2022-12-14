import styled from '@emotion/styled';
import { LikeUser } from 'pages/bookreviews/services/types';

interface LikeUserModalProps {
  users: LikeUser[];
  onClose: () => void;
}
const LikeUserModal = ({ users, onClose }: LikeUserModalProps) => {
  return (
    <ModalContainer>
      <div></div>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  max-width: 500px;
`;

export default LikeUserModal;
