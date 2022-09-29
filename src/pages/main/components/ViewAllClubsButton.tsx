import styled from '@emotion/styled';
import { Button } from '@trevari/components';
import { endpoints } from 'config';
import ga from 'pages/main/ga';

const ViewAllClubsButton = () => {
  const clickButton = () => {
    ga.event({ category: '메인 페이지', action: '클럽 모두 보기', label: '' });
    window.location.href = `${endpoints.user_page_url}/apply`;
  };

  return (
    <Base>
      <Button fullWidth size="big" onClick={clickButton}>
        클럽 모두 보기
      </Button>
    </Base>
  );
};

export default ViewAllClubsButton;

const Base = styled.div`
  margin: 20px 0;
  padding: 20px;
`;
