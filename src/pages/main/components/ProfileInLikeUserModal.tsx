import styled from '@emotion/styled';

import {body6} from '@trevari/typo';
import { DEFAULT_PROFILE_IMAGE } from '../const';
import { LikeUser } from 'pages/bookreviews/services/types';
import CenterDot from 'components/svgs/CenterDot';

interface ProfileInLikeUserModalProps {
  user: LikeUser;
}
const ProfileInLikeUserModal = ({ user }: ProfileInLikeUserModalProps) => {
  const { name, profileImageUrl, role } = user;

  const onImageError = e => {
    e.src = DEFAULT_PROFILE_IMAGE;
  };
  return (
    <Base>
      <ProfileImage src={profileImageUrl || DEFAULT_PROFILE_IMAGE} onError={onImageError}></ProfileImage>
      <Box>
        <span>{name}</span>
        <CenterDot />
        <span>{role}</span>
      </Box>
    </Base>
  );
};

const Base = styled.div`
  padding: 15px 20px;
  display: flex;
  align-items: center;
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
