import styled from '@emotion/styled';
import { CommentOutlineIcon, HeartIcon } from '@trevari/icons';
import { heading9, title4 } from '@trevari/typo';
import LoveFilled from 'components/svgs/LoveFilled';
import LoveOutline from 'components/svgs/LoveOutline';
import { Bookreview } from 'types/__generate__/user-backend-api';

interface BookreviewContentProps {
  bookreview: Bookreview;
  userID: string;
}
const BookreviewContent = ({ bookreview, userID }: BookreviewContentProps) => {
  const { contents, content, title, commentCount, likeUserIDs } = bookreview;
  const alreadyLikedBookrivew = !likeUserIDs.includes(userID);
  return (
    <Base>
      <Title>{title}</Title>
      <div dangerouslySetInnerHTML={{ __html: content || '' }} />
    </Base>
  );
};

const Base = styled.div`
  padding: 20px;
  p {
    margin: unset;
  }
`;
const Title = styled.h3`
  ${heading9};
  margin: 4px 0 20px;
`;
const IconBox = styled.div`
  display: flex;
`;
const IconText = styled.span`
  color: ${({ theme }) => theme.colors.gray600};
  margin: 0 14px 0 4px;
  ${title4};
`;
export default BookreviewContent;
