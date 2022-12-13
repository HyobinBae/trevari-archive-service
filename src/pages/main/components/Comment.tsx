import styled from '@emotion/styled';
import { BottomSheetRef } from 'react-spring-bottom-sheet';

import { CommentOutlineIcon } from '@trevari/icons';
import { contents2, title4 } from '@trevari/typo';
import { Divider } from 'pages/curations/curations.styles';
import React, { useRef } from 'react';
import { BookreviewComment } from 'types/__generate__/user-backend-api';
import ProfileInBookreviewPage from './ProfileInBookreviewPage';
import { DEFAULT_PROFILE_IMAGE } from '../const';
import Kebab from 'components/svgs/Kebab';

interface CommentProps {
  comment: BookreviewComment;
  onClickReply: (name: string, id: string) => void;
}
const Comment = ({ comment, onClickReply }: CommentProps) => {
  const { user, createdAt, content, replies, id } = comment;
  const sheetRef = useRef<BottomSheetRef>();

  const onImageError = e => {
    e.src = DEFAULT_PROFILE_IMAGE;
  };

  return (
    <div>
      <ProfileBox>
        <Kebab />
        <ProfileInBookreviewPage user={user} publishedAt={createdAt} isBookreviewProfile={false} />
      </ProfileBox>
      <Content>{content}</Content>
      <IconWrapper>
        <CommentOutlineIcon />
        <IconText onClick={() => onClickReply(`@${user!.name} `, id)}>답글 쓰기</IconText>
      </IconWrapper>
      <Divider />
      {replies?.map(reply => {
        const { user: replyUser, createdAt: replyCreatedAt, content: replyContent, id: replyID } = reply;
        return (
          <React.Fragment key={replyID}>
            <ReplyBase>
              <ProfileBox>
                <Kebab />
                <ProfileInBookreviewPage user={replyUser} publishedAt={replyCreatedAt} isBookreviewProfile={false} />
              </ProfileBox>
              <Content>{replyContent}</Content>
              <IconWrapper>
                <CommentOutlineIcon />
                <IconText onClick={() => onClickReply(`@${user!.name} `, id)}>답글 쓰기</IconText>
              </IconWrapper>
            </ReplyBase>
            <Divider />
          </React.Fragment>
        );
      })}
    </div>
  );
};
const ReplyBase = styled.div`
  padding-left: 48px;
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
const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row-reverse;
  padding-right: 20px;
`;
export default Comment;
