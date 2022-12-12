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
  console.log(alreadyLikedBookrivew);
  return (
    <Base>
      <Title>{title}</Title>
      <div dangerouslySetInnerHTML={{ __html: content || '' }} />
      <IconBox>
        {alreadyLikedBookrivew ? (
          <LoveFilled width={20} height={20} strokeColor="#FF7900" />
        ) : (
          <LoveOutline width={20} height={20} />
        )}
        {/* <Love fill={alreadyLikedBookrivew ? '#FF7900' : 'none'} /> */}
        <IconText>좋아요 {likeUserIDs.length}</IconText>
        <CommentOutlineIcon />
        <IconText>댓글 {commentCount || 0}</IconText>
      </IconBox>
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
