import { Loading } from '@trevari/components';
import { useEffect, useState } from 'react';
import { selectAuthenticated } from 'services/auth/auth.store';
import { useAppDispatch, useAppSelector } from 'services/store';
import { selectUser } from 'services/user/user.store';
import { useGetBookreviewQuery } from './services/api';
import ProfileInBookreviewPage from 'pages/main/components/ProfileInBookreviewPage';
import BookreviewContent from 'pages/main/components/BookreviewContent';
import Comment from 'pages/main/components/Comment';
import BookreviewComments from 'pages/main/components/BookreviewComments';

const BookReviewShow = () => {
  const { data: bookreview, isLoading } = useGetBookreviewQuery({ id: '9463e066-decb-4e05-8783-a5dd4b7caa83' });
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const authenticated = useAppSelector(selectAuthenticated);
  const [commentInputState, setCommentInputState] = useState({
    type: 'comment',
    replyCommentID: '',
    replyCommentUsername: '',
  });
  console.log(bookreview);
  useEffect(() => {
    // if (authenticated)
  }, []);

  const onClickComment = (type: string, replyCommentID: string, replyCommentUsername: string) => {
    setCommentInputState({ type, replyCommentID, replyCommentUsername });
  };
  if (isLoading) return <Loading variant="gridCardList" />;
  return (
    <div>
      <ProfileInBookreviewPage
        user={user}
        clubName={bookreview?.club?.name || ''}
        publishedAt={bookreview?.publishedAt}
      />
      <BookreviewContent bookreview={bookreview!} />
      <BookreviewComments likeUserIDs={bookreview?.likeUserIDs} comments={bookreview?.comments} user={user} />
    </div>
  );
};

export default BookReviewShow;
