import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import { useAppDispatch } from 'services/store';
import NewCurationInfoCard from './NewCurationInfoCard';
import { Button } from '@trevari/components';
const curations = [
  {
    id: '1',
    title: '자본주의 살아남기',
    isDisplay: true,
    description: '어떻게 살아남아야 할까?',
    head: '나계속지금처럼일하고벌고써도괜찮을까나계속지금처럼일하고벌고',
    body: '우리는지금이시대에서경제적자유를획득하고주도적인삶을살아가기위해서창업가의태도와역량이필요하다고믿습니다우리는지금',
    order: 1,
    createdAt: 1,
    coverUrl:
      'https://image.trevari.co.kr/file/d7e3576e-9f2d-4e93-b3b8-760e98cac9f0.%E1%84%86%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%AE%E1%86%AB%20%E1%84%82%E1%85%B5%E1%86%B7.png',
    list: [],
  },
  {
    id: '2',
    title: 'isDisplay: true, description:',
    isDisplay: true,
    head: 'head',
    body: 'body',
    description: 'isDisplay: true, description:',
    order: 2,
    createdAt: 2,
    coverUrl: 'https://image.trevari.co.kr/file/fbbb9d43-4078-4f6e-9608-20431dbdc26f.beginning_2.png',
    list: [],
  },
  {
    id: '3',
    title: '안녕',
    head: 'head',
    body: 'body',
    isDisplay: true,
    description: 'hi',
    order: 3,
    createdAt: 3,
    coverUrl: 'https://image.trevari.co.kr/file/fbbb9d43-4078-4f6e-9608-20431dbdc26f.beginning_2.png',
    list: [],
  },
  {
    id: '4',
    coverUrl: 'https://image.trevari.co.kr/file/fbbb9d43-4078-4f6e-9608-20431dbdc26f.beginning_2.png',
    title: '789',
    head: 'head',
    body: 'body',
    isDisplay: true,
    description: 'hi',
    order: 4,
    createdAt: 3,
    list: [],
  },
];
const NewCurationList = () => {
  const dispatch = useAppDispatch();

  // const getNewCurations = async () => {
  //   console.log(1);
  // };
  useEffect(() => {
    // getNewCurations();
  }, []);

  const onClickViewAllButton = (id: string) => {
    console.log(id);
  };
  return (
    <Box>
      {curations?.map(curation => (
        <React.Fragment key={curation.id}>
          <NewCurationInfoCard curation={curation} />
          {/* <ClubList /> */}
          <ButtonWrapper>
            <Button
              onClick={() => onClickViewAllButton(curation.id)}
              size="big"
              fullWidth
              colorVariant="dark"
              variant="outline"
            >
              전체 보기
            </Button>
          </ButtonWrapper>
        </React.Fragment>
      ))}
    </Box>
  );
};

const Box = styled.div``;
const ButtonWrapper = styled.div`
  padding: 0 20px;
  margin: 24px 0 60px;
`;
export default NewCurationList;
