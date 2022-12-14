import React, { useState } from 'react';
import { Club } from '../../../types/__generate__/user-backend-api';
import styled from '@emotion/styled';
import { ProfileAvatar } from '@trevari/components';
import { CommentIcon, HeartIcon, KebabIcon } from '@trevari/icons';
import { body8, contents2, heading9, title4, title6 } from '@trevari/typo';
import { elapsedTime } from '../../../utils/time';

interface Props {
  clubID: string;
  club: Club;
}

const BookreviewItem = ({ clubID, club }: Props) => {
  const bookreviewContent = '알베르토 사보이아, 『아이디어 불패의 법칙(양장본 HardCover)』알베르토 사보이아, 『아이디어 불패의 법칙(양장본 HardCover)』알베르토 사보이아, 『아이디어 불패의 법칙(양장본 HardCover)』알베르토 사보이아, 『아이디어 불패의 법칙(양장본 HardCover)』알베르토 사보이아, 『아이디어 불패의 법칙(양장본 HardCover)』알베르토 사보이아, 『아이디어 불패의 법칙(양장본 HardCover)』알베르토 사보이아, 『아이디어 불패의 법칙(양장본 HardCover)』알베르토 사보이아, 『아이디어 불패의 법칙(양장본 HardCover)』알베르토 사보이아, 『아이디어 불패의 법칙(양장본 HardCover)』';
  const time = '2020-12-14 09:24:59.000000 +00:00';

  const [limit, setLimit] = useState(94);

  const toggleEllipsis = (str: string, limit: number) => {
    return {
      string: str.slice(0, limit),
      isShowMore: str.length > limit
    }
  };

  const onClickMore = (str: string) => {
    setLimit(str.length);
  };

  // const goToProfile = () => {
  //   // `/profile?${
  //   //   comment.user!.email
  //   //     ? `uid=${Buffer.from(comment.user!.email).toString('base64')}`
  //   //     : `userName=${comment.user!.name}`
  // };

  return (
    <BookreviewItemWrapper>
      <BookreviewItemDiv>
        <ProfileDiv>
          <ProfileAvatarWrapper onClick={() => console.log('유저 프로필 페이지로~')}>
            <ProfileAvatar src={'https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=tmfrl3316&logNo=100087488872&view=img_1'} size={38}/>
          </ProfileAvatarWrapper>
          <NameDiv>
            <UserNameDiv onClick={() => console.log('유저 프로필 페이지로~')}>김바리</UserNameDiv>
            <ClubNameDiv onClick={() => console.log('클럽 상세 페이지로?')}>club.name</ClubNameDiv>
          </NameDiv>
        </ProfileDiv>
        <ProfileDiv>
          <UpdatedAtDiv>{elapsedTime(time)}</UpdatedAtDiv>
          <KebabIcon onClick={() => console.log('신고하기')}/>
        </ProfileDiv>
      </BookreviewItemDiv>
      <ClubNameWrapper>
        {club.name}
      </ClubNameWrapper>
      <BookreviewContent>
        {toggleEllipsis(bookreviewContent, limit).string}
        {toggleEllipsis(bookreviewContent, limit).isShowMore && <ShowMoreButton onClick={() => onClickMore(bookreviewContent)}>...더보기</ShowMoreButton>}
      </BookreviewContent>
      <BookMovieDivWrapper>
        <BookMovieDiv><BookMovieSpan>책 | </BookMovieSpan>알베르토 사보이아, 『아이디어 불패의 법칙(양장본 HardCover)』</BookMovieDiv>
        <BookMovieDiv><BookMovieSpan>영화 | </BookMovieSpan>에브리씽 에브리웨어 올 앳 원스</BookMovieDiv>
      </BookMovieDivWrapper>
      <ReactionDivWrapper>
        <ReactionDiv>
          <HeartIcon onClick={() => console.log('좋아요 반영~')} color={'#ADADAA'} width={20} height={20} style={{marginRight: '6px'}}/> <span onClick={() => console.log('좋아요 리스트페이지로')}>좋아요</span>
        </ReactionDiv>
        <ReactionDiv style={{marginLeft: '16px'}} onClick={() => console.log('댓글 클릭~')}>
          <CommentIcon width={20} height={20} style={{marginRight: '6px'}}/> <span>댓글</span>
        </ReactionDiv>
      </ReactionDivWrapper>
    </BookreviewItemWrapper>
  )
};

const BookreviewItemWrapper = styled.div`
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid ${({theme}) => theme.colors.gray300};
`;

const ReactionDivWrapper = styled.div`
  display: flex;
  flex-direction: row;
  ${title4};
  color: ${({theme}) =>  theme.colors.gray600};
`;
const ReactionDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  span {
    cursor: pointer;
  }
`;
const BookMovieSpan = styled.span`
  ${title6};
  color: ${({theme}) => theme.colors.gray600};
`;
const BookreviewItemDiv = styled.div`
  flex-direction: row;
  justify-content: space-between;
  display: flex;
`;
const ProfileDiv = styled.div`
  display: flex;
  align-items: center;
`;
const UserNameDiv = styled.div`
  ${title6};
  cursor: pointer;
`;
const ClubNameDiv = styled.div`
  ${title6};
  color: ${({theme}) => theme.colors.orange900};
  cursor: pointer;
`;
const UpdatedAtDiv = styled.div`
  ${body8};
  margin-right: 4px;
`;
const NameDiv = styled.div`
  margin-left: 10px;
`;
const ClubNameWrapper = styled.div`
  ${heading9};
  margin-top: 24px;
  margin-bottom: 20px;
`;
const BookMovieDiv = styled.div`
  ${body8};
  color: ${({theme}) => theme.colors.gray600};
`;
const BookMovieDivWrapper = styled.div`
  margin-bottom: 20px;
`;
const ProfileAvatarWrapper = styled.div`
  cursor: pointer;
`;
const BookreviewContent = styled.div`
  ${contents2};
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  margin-bottom: 20px;
`;

const ShowMoreButton = styled.div`
  float: right;
  cursor: pointer;
  ${title4};
  color: ${({theme}) => theme.colors.gray500};
  margin-top: 6px;
`;


export default BookreviewItem;
