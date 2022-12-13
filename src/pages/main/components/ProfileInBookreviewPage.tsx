import styled from '@emotion/styled';

import { User } from 'types/__generate__/user-backend-api';
import { body8, title6 } from '@trevari/typo';
import { DEFAULT_PROFILE_IMAGE } from '../const';
import { formatRelativeTime } from 'utils/format';

interface ProfileInBookreviewPageProps {
  user: User;
  clubName?: string;
  publishedAt: string;
  isBookreviewProfile?: boolean;
}
const ProfileInBookreviewPage = ({
  user,
  clubName,
  publishedAt,
  isBookreviewProfile = true,
}: ProfileInBookreviewPageProps) => {
  const { name, profileImageUrl } = user;

  const onImageError = e => {
    e.src = DEFAULT_PROFILE_IMAGE;
  };
  return (
    <Base>
      <ProfileImage src={profileImageUrl || DEFAULT_PROFILE_IMAGE} onError={onImageError}></ProfileImage>
      <Box>
        <span>{name}</span>
        <span>{clubName}</span>
      </Box>
      <PublishedTime>{formatRelativeTime(publishedAt)}</PublishedTime>
    </Base>
  );
};

const Base = styled.div`
  padding: 20px 0 20px 20px;
  display: flex;
  align-items: center;
  flex: 1;
`;
const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
const Box = styled.div`
  margin-left: 10px;
  flex: 1;
  span {
    display: block;
    ${title6}
  }
  span + span {
    color: ${({ theme }) => theme.colors.orange900};
  }
`;

const PublishedTime = styled.span`
  ${body8};
`;
export default ProfileInBookreviewPage;
