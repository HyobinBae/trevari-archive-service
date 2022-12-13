import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';

import Kebab from 'components/svgs/Kebab';
import { User } from 'types/__generate__/user-backend-api';
import ProfileInBookreviewPage from './ProfileInBookreviewPage';
import MoreItems from './MoreItems';
import { useWindowSize } from 'utils/windowResize';

interface ProfileProps {
  user: User;
  clubName?: string;
  publishedAt: string;
  isBookreviewProfile?: boolean;
  isMyBookreview: boolean;
}

const Profile = ({ user, clubName, publishedAt, isBookreviewProfile = true, isMyBookreview }: ProfileProps) => {
  const sheetRef = useRef<BottomSheetRef>();
  const { width } = useWindowSize();
  const [isOpenMoreList, setOpenMoreList] = useState<boolean>(false);

  const MORE_ACTIONS_OF_MY_BOOKREVIEW = [
    {
      text: '삭제하기',
      onAction: () => console.log(1),
    },
    {
      text: '수정하기',
      onAction: () => console.log(2),
    },
  ];

  const MORE_ACTIONS = [
    {
      text: '신고하기',
      onAction: () => {
        if (confirm('신고 하시겠습니까?')) {
          alert('신고가 접수되었습니다.');
        }
      },
    },
  ];
  const onDismiss = () => {
    setOpenMoreList(false);
  };
  useEffect(() => onDismiss, []);
  console.log(isOpenMoreList);

  const bottomSheetLeftMarginPx = width > 500 ? 'calc(50vw - 250px)' : 0;
  return (
    <>
      <PaddingBox />
      <ProfileBox>
        <MoreButtonWrapper onClick={() => setOpenMoreList(state => !state)}>
          <Kebab />
        </MoreButtonWrapper>
        <ProfileInBookreviewPage
          user={user}
          clubName={clubName}
          publishedAt={publishedAt}
          isBookreviewProfile={isBookreviewProfile}
        />
      </ProfileBox>
      <BottomSheet
        open={isOpenMoreList}
        onDismiss={() => setOpenMoreList(state => !state)}
        style={{
          '--rsbs-ml': bottomSheetLeftMarginPx,
          '--rsbs-max-w': '500px',
        }}
      >
        <MoreItems actions={isMyBookreview ? MORE_ACTIONS_OF_MY_BOOKREVIEW : MORE_ACTIONS} />
      </BottomSheet>
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
const MoreButtonWrapper = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
`;
export default Profile;
