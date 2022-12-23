import styled from '@emotion/styled';

import {body6} from '@trevari/typo';
import { DEFAULT_PROFILE_IMAGE } from '../const';
import { LikeUser } from 'pages/bookreviews/services/types';
import CenterDot from 'components/svgs/CenterDot';

interface ProfileInLikeUserModalProps {
  user: LikeUser;
  onClickUser: ((user: LikeUser) => void);
}
const ProfileInLikeUserModal = ({ user, onClickUser }: ProfileInLikeUserModalProps) => {
  const onImageError = e => {
    e.src = DEFAULT_PROFILE_IMAGE;
  };
  return (
    <Base onClick={ () => onClickUser(user)}>
      <ProfileImage src={user.profileImageUrl || DEFAULT_PROFILE_IMAGE} onError={onImageError}></ProfileImage>
      <Box>
        <span>{user.name}</span>
        <CenterDot />
        <span>{user.role}</span>
      </Box>
    </Base>
  );
};

const Base = styled.div`
  padding: 15px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const Box = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  span {
    ${body6}
    color: ${({ theme }) => theme.colors.gray800}
  }
`;

export default ProfileInLikeUserModal;
