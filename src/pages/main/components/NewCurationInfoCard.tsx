import styled from '@emotion/styled';
import { heading7, heading13, body4 } from '@trevari/typo';
import { INewCuration } from '../services/main.types';
const NewCurationInfoCard = ({ curation }: { curation: INewCuration }) => {
  const { title, description, head, body, coverUrl } = curation;

  return (
    <CurationInfoCard>
      <CurationCoverImage src={coverUrl} />
      <CurationTitleBox>
        <div>{title}</div>
        <div>{description}</div>
      </CurationTitleBox>
      <CurationHeadingText>{head}</CurationHeadingText>
      <CurationBodyText>{body}</CurationBodyText>
    </CurationInfoCard>
  );
};

const CurationInfoCard = styled.div`
  padding-left: 20px;
  &:first-child {
    margin-top: 30px;
  }
`;

const CurationCoverImage = styled.img`
  width: 100%;
  vertical-align: bottom;
`;
const CurationTitleBox = styled.div`
  ${heading13};
  display: flex;
  margin-bottom: 12px;
  div {
    padding: 5px 9px;
    border: 1px solid black;
    border-right: unset;
  }
  div + div {
    flex: 1;
  }
`;
const CurationHeadingText = styled.div`
  ${heading7};
  padding-right: 20px;
`;
const CurationBodyText = styled.div`
  ${body4};
  margin: 6px 0 24px;
  padding-right: 20px;
`;
export default NewCurationInfoCard;
