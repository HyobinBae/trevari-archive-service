import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'services/store';
import { selectUser } from 'services/user/user.store';
import { hasMembership } from 'services/user/user.api';
import {useGetBookreviewQuery} from './services/api';
import BookreviewContent from 'pages/main/components/BookreviewContent';
import BookreviewComments from 'pages/main/components/BookreviewComments';
import Profile from 'pages/main/components/Profile';
import { getClubRoles } from 'services/user/user.api';
import { ADMIN_IDS, BOOK_REVIEW_SERVICE_ID } from 'pages/main/const';
import { format, isAfter, parseISO } from 'date-fns';
import { goToPage } from 'utils';
import { endpoints } from 'config';
import LoadingPage from 'components/base/LoadingPage';
import {ClubRole, User} from 'types/__generate__/user-backend-api';
import {Buffer} from "buffer";


const BookReviewShow = () => {
  const { bookreivewID } = useParams();
  const { data: bookreview, isLoading } = useGetBookreviewQuery({ id: bookreivewID || '' });

  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const [permission, setPermission] = useState<'loading' | 'denied' | 'accepted'>('loading');

  const goToProfile = (user: User) => {
    const buff = Buffer.from(user.email, 'utf-8');
    const base64 = buff.toString('base64');
    goToPage(`${endpoints.user_page_url}/profile?${user.email ? `uid=${base64}` : `userName=${user.name}`}`);
  };

  useEffect(() => {
    if (user && bookreview) {
      checkPermissions();
    }
  }, [user, bookreview]);

  const isMyClubAsync = async () => {
    const clubRoleAction = await dispatch(
        getClubRoles.initiate({ where: { userID: user.id, refundStatuses: [null, '환불 입금 대기', '환불 입금 완료'] } }),
    );
    const clubRoles = clubRoleAction.data;
    return clubRoles.some((clubRole: ClubRole) => clubRole.clubID === bookreview.club.id);
  }

  const isAdmin = () => {
    return ADMIN_IDS.includes(user.id);
  }

  const hasMembershipAsync = async () => {
    const now = parseISO(format(new Date(), 'yyyy-MM-dd'));
    const meetingDate = parseISO(format(new Date(bookreview.meeting.startedAt), 'yyyy-MM-dd'));
    const isTodayOrPastMeeting = isAfter(now, meetingDate);

    let hasMembershipArgs;
    if (isTodayOrPastMeeting) {
      hasMembershipArgs = { userID: user.id, serviceID: BOOK_REVIEW_SERVICE_ID };
    } else {
      hasMembershipArgs = {
        checkDate: bookreview.meeting.startedAt,
        userID: user.id,
        serviceID: BOOK_REVIEW_SERVICE_ID,
      };
    }
    const hasMembershipAction = await dispatch(hasMembership.initiate(hasMembershipArgs));
    return hasMembershipAction.isSuccess && hasMembershipAction.data;
  }

  const isMyBookreview = () => {
    return bookreview.userID === user.id;
  }

  const isPublicBookreview = () => {
    return bookreview.isPublic
  }

  const hasPermissions = async () => {
    if (isAdmin()) return true
    if (isPublicBookreview()) return true
    if (isMyBookreview()) return true
    if (await isMyClubAsync()) return true
    if (await hasMembershipAsync()) return true

    return false
  }

  const checkPermissions = async () => {
    if (!user || !bookreview) return;
    const permission = await hasPermissions() ? 'accepted' : 'denied'
    setPermission(permission);
  };

  if (isLoading || permission === 'loading') return <LoadingPage />;
  if (permission === 'denied') {
    goToPage(`${endpoints.user_page_url}/apply/wait`);
    return <LoadingPage />;
  }
  return (
    <div>
      <Profile
        user={bookreview?.user}
        clubName={bookreview?.club?.name + (bookreview?.role && bookreview?.role === '놀러가기' ? '(놀러가기)' : '') || ''}
        publishedAt={bookreview?.publishedAt}
        isMyBookreview={bookreview?.user.id === user.id}
        bookreviewID={bookreview?.id}
        goToProfile={goToProfile}
      />
      <BookreviewContent bookreview={bookreview} />
      <BookreviewComments
        bookreviewID={bookreview?.id}
        likeUserIDs={bookreview?.likeUserIDs}
        comments={bookreview?.comments}
        user={user}
        goToProfile={goToProfile}
      />
    </div>
  );
};

export default BookReviewShow;
