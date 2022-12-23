import styled from '@emotion/styled';

import { User } from 'types/__generate__/user-backend-api';
import { body8, title6 } from '@trevari/typo';
import { DEFAULT_PROFILE_IMAGE } from '../const';
import { elapsedTime } from 'utils/time';

interface ProfileInBookreviewPageProps {
  user: User;
  clubName?: string;
  publishedAt: string;
  onClicked: (() => void)
}
const ProfileInBookreviewPage = ({ user, clubName, publishedAt, onClicked }: ProfileInBookreviewPageProps) => {
  const { name, profileImageUrl } = user;

  const onImageError = e => {
    e.src = DEFAULT_PROFILE_IMAGE;
  };
  return (
    <Base>
      <ProfileImage
          onClick={() => {onClicked()}}
          src={profileImageUrl || DEFAULT_PROFILE_IMAGE} onError={onImageError}></ProfileImage>
      <Box onClick={() => {onClicked()}}>
        <span>{name}</span>
        <span>{clubName}</span>
      </Box>
      <PublishedTime>{elapsedTime(publishedAt)}</PublishedTime>
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
