import styled from '@emotion/styled';
import { CommentOutlineIcon } from '@trevari/icons';
import { contents2, title4 } from '@trevari/typo';
import { Divider } from 'pages/curations/curations.styles';
import { BookreviewComment } from 'types/__generate__/user-backend-api';
import ProfileInBookreviewPage from './ProfileInBookreviewPage';

interface CommentProps {
  comment: BookreviewComment;
  onClickReply: (name: string, id: string) => void;
}
const Comment = ({ comment, onClickReply }: CommentProps) => {
  const { user, createdAt, content, replies, id } = comment;

  return (
    <div>
      <ProfileInBookreviewPage user={user} publishedAt={createdAt} isBookreviewProfile={false} />
      <Content>{content}</Content>
      <IconWrapper>
        <CommentOutlineIcon />
        <IconText onClick={() => onClickReply(`@${user!.name} `, id)}>답글 쓰기</IconText>
      </IconWrapper>
      <Divider />
    </div>
  );
};
const Base = styled.div`
  padding: 20px;
`;
const IconWrapper = styled.div`
  display: flex;
  padding: 0 20px 20px 20px;
  align-items: center;
`;
const IconText = styled.span`
  ${title4};
  color: ${({ theme }) => theme.colors.gray600};
  cursor: pointer;
`;
const Content = styled.div`
  ${contents2};
  padding: 0 20px 20px;
`;
export default Comment;
