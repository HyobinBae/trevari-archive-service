import { Loading } from '@trevari/components';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { selectAuthenticated } from 'services/auth/auth.store';
import { useAppDispatch, useAppSelector } from 'services/store';
import { selectUser } from 'services/user/user.store';
import { useGetBookreviewQuery } from './services/api';
import ProfileInBookreviewPage from 'pages/main/components/ProfileInBookreviewPage';
import BookreviewContent from 'pages/main/components/BookreviewContent';
import BookreviewComments from 'pages/main/components/BookreviewComments';

const BookReviewShow = () => {
  const { bookreivewID } = useParams();
  const { data: bookreview, isLoading } = useGetBookreviewQuery({ id: bookreivewID || '' });
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const authenticated = useAppSelector(selectAuthenticated);
  useEffect(() => {
    // if (authenticated)
  }, []);

  if (isLoading) return <Loading variant="gridCardList" />;
  return (
    <div>
      <ProfileInBookreviewPage
        user={bookreview?.user}
        clubName={bookreview?.club?.name || ''}
        publishedAt={bookreview?.publishedAt}
      />
      <BookreviewContent bookreview={bookreview!} />
      <BookreviewComments likeUserIDs={bookreview?.likeUserIDs} comments={bookreview?.comments} user={user} />
    </div>
  );
};

export default BookReviewShow;
