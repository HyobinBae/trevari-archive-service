import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';

import Kebab from 'components/svgs/Kebab';
import { User } from 'types/__generate__/user-backend-api';
import ProfileInBookreviewPage from './ProfileInBookreviewPage';
import MoreItems from './MoreItems';
import { useWindowSize } from 'utils/windowResize';
import { goToPage } from 'utils';
import { endpoints } from 'config';
import { useAppDispatch } from 'services/store';
import { deleteBookreview } from 'pages/bookreviews/services/api';
import { toastAlert } from 'services/ui.store';
import BaseModal from './ModalBase';
import {shareApi} from "../../../api/share";
import {clipboard} from "../../../utils/clipboard";

interface ProfileProps {
  user: User;
  clubName?: string;
  publishedAt: string;
  isBookreviewProfile?: boolean;
  isMyBookreview: boolean;
  bookreviewID: string;
  goToProfile: ((user: User) => void);
}

const Profile = ({
  user,
  clubName,
  publishedAt,
  isBookreviewProfile = true,
  isMyBookreview,
  bookreviewID, goToProfile
}: ProfileProps) => {
  const { width } = useWindowSize();
  const dispatch = useAppDispatch();
  const [isOpenMoreList, setOpenMoreList] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const MORE_ACTIONS_OF_MY_BOOKREVIEW = [
    {
      text: '삭제하기',
      onAction: () => {
        onDismiss();
        onToggleModal();
      },
    },
    {
      text: '수정하기',
      onAction: () => goToPage(`${endpoints.user_page_url}/bookreviews/edit?bookreviewID=${bookreviewID}`),
    },
    {
      text: '링크 복사하기',
      onAction: () => clip(),
    },
  ];

  const MORE_ACTIONS = [
    {
      text: '링크 복사하기',
      onAction: () => clip(),
    },
  ];
  const clip = async () => {
    const originUrl = window.location.href
    await clipboard.copyTextToClipboard(originUrl)
    toastAlert({
      open: true,
      type: 'done',
      text: '링크가 복사되었습니다.',
    });
    onDismiss();
  };
  const onDismiss = () => {
    setOpenMoreList(false);
  };
  const onToggleModal = () => {
    setIsOpenDeleteModal(!isOpenDeleteModal);
  };
  const onConfirmDelete = async () => {
    const resultAction = await dispatch(deleteBookreview.initiate({ id: bookreviewID }));
    if (resultAction.data.deleteBookreview === true) {
      toastAlert({
        open: true,
        type: 'done',
        text: '독후감이 삭제되었습니다.',
      });
      // TODO: home -> 독후감 리스트 페이지
      setTimeout(() => {
        goToPage('/');
        onToggleModal();
      }, 1000);
    }
  };
  useEffect(() => onDismiss, []);

  const bottomSheetLeftMarginPx = width > 500 ? 'calc(50vw - 250px)' : 0;
  const deleteModalTitle = '정말 삭제하시겠습니까?';
  const deleteModalText = `삭제한 독후감은 복구가 어렵습니다.
  모임일 전에 독후감을 삭제할 경우, 모임 참석이 불가능하다는 점도 꼭 확인해 주세요.`;
  return (
    <>
      <PaddingBox />
      <ProfileBox>
        <MoreButtonWrapper onClick={() => setOpenMoreList(state => !state)}>
          <Kebab />
        </MoreButtonWrapper>
        <ProfileInBookreviewPage
            onClicked={() => goToProfile(user)}
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
      <BaseModal
        title={deleteModalTitle}
        open={isOpenDeleteModal}
        text={deleteModalText}
        onCancel={onToggleModal}
        onConfirm={onConfirmDelete}
      />
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
  cursor: pointer;
`;
export default Profile;
