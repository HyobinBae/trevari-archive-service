import styled from '@emotion/styled';
import React from 'react';
import { Badge } from '@trevari/components';

import Box from 'components/base/Box';
import { Club } from 'types/__generate__/user-backend-api';
import { clubStatus, OPTION_BADGE, STATUS_BADGE } from 'utils/club';

interface IProps {
  club: Club;
}
const RenderStickers = ({ club }: IProps) => {
  const statusBadge = clubStatus(club);
  const renderOptionBadge = () => {
    if (club.id === '9a17cad0-4c45-4beb-9e64-ea95eba44030' || club.id === '26fbf846-6621-4161-a227-6b58402469fb') {
      const key = '온라인';
      return (
        <Box style={{ marginTop: statusBadge ? '6px' : '0px' }}>
          <Badge
            backgroundColor={OPTION_BADGE[key].color}
            color={'#fff'}
            variant={OPTION_BADGE[key].type}
            size={'small'}
          >
            {OPTION_BADGE[key].name}
          </Badge>
        </Box>
      );
    }

    if (club.options.includes('온라인')) {
      const optionName = '온라인';
      return (
        <Box style={{ marginTop: statusBadge ? '6px' : '0px' }}>
          <Badge
            backgroundColor={OPTION_BADGE[optionName].color}
            color={'#fff'}
            size={'small'}
            variant={OPTION_BADGE[optionName].type}
          >
            {OPTION_BADGE[optionName].name}
          </Badge>
        </Box>
      );
    }
    return null;
  };

  return (
    <TagBox>
      {statusBadge && (
        <Badge
          backgroundColor={STATUS_BADGE[statusBadge].color}
          color={'#fff'}
          size={'small'}
          variant={STATUS_BADGE[statusBadge].type}
        >
          {STATUS_BADGE[statusBadge].name}
        </Badge>
      )}
      {club.options.length > 0 && renderOptionBadge()}
    </TagBox>
  );
};

export default RenderStickers;

const TagBox = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: auto;
`;
