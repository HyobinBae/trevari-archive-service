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
import { ClubRole } from 'types/__generate__/user-backend-api';



const BookReviewShow = () => {
  const { bookreivewID } = useParams();
  const { data: bookreview, isLoading } = useGetBookreviewQuery({ id: bookreivewID || '' });

  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const [permission, setPermission] = useState<'loading' | 'denied' | 'accepted'>('loading');

  useEffect(() => {
    if (user && bookreview) {
      getPermission();
    }
  }, [user, bookreview]);

  const getPermission = async () => {
    if (!user || !bookreview) return;
    const clubRoleAction = await dispatch(
      getClubRoles.initiate({ where: { userID: user.id, refundStatuses: [null, '환불 입금 대기', '환불 입금 완료'] } }),
    );
    const clubRoles = clubRoleAction.data;
    const isMyClub = clubRoles.some((clubRole: ClubRole) => clubRole.clubID === bookreview.club.id);
    const isMyBookreview = bookreview.userID === user.id;
    const isAdmin = ADMIN_IDS.includes(user.id);
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
    const hasMembershipFlag = hasMembershipAction.isSuccess && hasMembershipAction.data.hasMembership;

    const hasPermission = bookreview.isPublic || isMyClub || isAdmin || hasMembershipFlag || isMyBookreview;
    if (!hasPermission) {
      setPermission('denied');
    } else {
      setPermission('accepted');
    }
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
        clubName={bookreview?.club?.name || ''}
        publishedAt={bookreview?.publishedAt}
        isMyBookreview={bookreview?.user.id === user.id}
        bookreviewID={bookreview?.id}
      />
      <BookreviewContent bookreview={bookreview} />
      <BookreviewComments
        bookreviewID={bookreview?.id}
        likeUserIDs={bookreview?.likeUserIDs}
        comments={bookreview?.comments}
        user={user}
      />
    </div>
  );
};

export default BookReviewShow;
