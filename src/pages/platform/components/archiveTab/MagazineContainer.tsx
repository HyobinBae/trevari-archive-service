import React, { useEffect } from 'react';
import ContentDivider from './ContentDivider';
import styled from '@emotion/styled';
import ReadingContent from './ReadingContent';
import { useAppDispatch, useAppSelector } from '../../../../services/store';
import { getMagazine} from '../../../../api/backend';
import { selectMagazineList } from '../../services/platform.store';
import { MagazineListProps } from '../../services/platform.types';
import { useParams } from 'react-router-dom';

const initialState: MagazineListProps[] = [
  { id: 0,
    contents: [
      {
        title: '',
        src: '',
        type: ''
      }
    ],
  },
]

const MagazineContainer = () => {
  const { platformID } = useParams();
  const magazineList = useAppSelector(selectMagazineList);
  const searchParams = useAppSelector((state)=>state.platform.getSearchParams);
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(getMagazine.initiate({initialState, platformID, searchParams}))
  },[])

  return(
    <>
      {magazineList.map((info: MagazineListProps) => {
        return(
          <>
            <Container key={info.id}>
              <ReadingContent magazine={info.contents}></ReadingContent>
            </Container>
            <ContentDivider/>
          </>
        )
      })}
    </>
  )
}

export default MagazineContainer

const Container = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  padding: 24px 30px 10px 24px;
  background: #222222;
  
  cursor:pointer;
`