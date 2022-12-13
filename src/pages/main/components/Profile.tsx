import styled from '@emotion/styled';
import Kebab from 'components/svgs/Kebab';
import { User } from 'types/__generate__/user-backend-api';
import ProfileInBookreviewPage from './ProfileInBookreviewPage';

interface ProfileProps {
  user: User;
  clubName?: string;
  publishedAt: string;
  isBookreviewProfile?: boolean;
}

const Profile = ({ user, clubName, publishedAt, isBookreviewProfile = true }: ProfileProps) => {
  return (
    <>
      <PaddingBox />
      <ProfileBox>
        <Kebab />
        <ProfileInBookreviewPage
          user={user}
          clubName={clubName}
          publishedAt={publishedAt}
          isBookreviewProfile={isBookreviewProfile}
        />
      </ProfileBox>
    </>
  );
};

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row-reverse;
  padding-right: 20px;
`;

const PaddingBox = styled.div`
  padding-top: 48px;
`;
export default Profile;
