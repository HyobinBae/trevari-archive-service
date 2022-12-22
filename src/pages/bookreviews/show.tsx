import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'services/store';
import { selectUser } from 'services/user/user.store';
import { hasMembership } from 'services/user/user.api';
import { useGetBookreviewQuery } from './services/api';
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

  const [bookReviewState, setBookReviewState] = useState(bookreview)

  useEffect(() => {
    if (user && bookReviewState) {
      getPermission();
    }
  }, [user, bookReviewState]);

  const getPermission = async () => {
    if (!user || !bookReviewState) return;
    const clubRoleAction = await dispatch(
      getClubRoles.initiate({ where: { userID: user.id, refundStatuses: [null, '환불 입금 대기', '환불 입금 완료'] } }),
    );
    const clubRoles = clubRoleAction.data;
    const isMyClub = clubRoles.some((clubRole: ClubRole) => clubRole.clubID === bookReviewState.club.id);
    const isMyBookreview = bookReviewState.userID === user.id;
    const isAdmin = ADMIN_IDS.includes(user.id);
    const now = parseISO(format(new Date(), 'yyyy-MM-dd'));
    const meetingDate = parseISO(format(new Date(bookReviewState.meeting.startedAt), 'yyyy-MM-dd'));
    const isTodayOrPastMeeting = isAfter(now, meetingDate);

    let hasMembershipArgs;
    if (isTodayOrPastMeeting) {
      hasMembershipArgs = { userID: user.id, serviceID: BOOK_REVIEW_SERVICE_ID };
    } else {
      hasMembershipArgs = {
        checkDate: bookReviewState.meeting.startedAt,
        userID: user.id,
        serviceID: BOOK_REVIEW_SERVICE_ID,
      };
    }
    const hasMembershipAction = await dispatch(hasMembership.initiate(hasMembershipArgs));
    const hasMembershipFlag = hasMembershipAction.isSuccess && hasMembershipAction.data.hasMembership;

    const hasPermission = bookReviewState.isPublic || isMyClub || isAdmin || hasMembershipFlag || isMyBookreview;
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

  const onRefresh = () => {
    const { data: bookreview, isLoading } = useGetBookreviewQuery({ id: bookreivewID || '' });
    setBookReviewState(bookreview)
  }

  return (
    <div>
      <Profile
        user={bookReviewState?.user}
        clubName={bookReviewState?.club?.name || ''}
        publishedAt={bookReviewState?.publishedAt}
        isMyBookreview={bookReviewState?.user.id === user.id}
        bookreviewID={bookReviewState?.id}
      />
      <BookreviewContent bookreview={bookReviewState} />
      <BookreviewComments
        bookreviewID={bookReviewState?.id}
        likeUserIDs={bookReviewState?.likeUserIDs}
        comments={bookReviewState?.comments}
        onRefresh={onRefresh}
        user={user}
      />
    </div>
  );
};

export default BookReviewShow;
