import React, { MouseEvent, useEffect } from 'react';
import ContentDivider from './ContentDivider';
import styled from '@emotion/styled';
import VodContent from './VodContent';
import { useAppDispatch } from '../../../../services/store';
import { useAppSelector } from '../../../../services/store';
import { getReplay } from '../../../../api/backend';
import { selectReplayList } from '../../services/platform.store';
import { useParams } from 'react-router-dom';

const initialState: VodContentsProps[] = [
  {
    title: '',
    description:'',
    src: '',
    type: ''
  }
]

interface VodContents {
 replay?: VodContentsProps[]|undefined
}

export interface VodContentsProps {
  title?: string|undefined,
  description?: string|undefined,
  src?: string|undefined,
  type?: string|undefined,
}

export interface Button{
  getSearchParams:((event:MouseEvent)=>void);
}

const VodContainer = () => {
  const { platformID } = useParams();
  const replay = useAppSelector(selectReplayList);
  const searchParams = useAppSelector((state)=>state.platform.getSearchParams);
  const dispatch = useAppDispatch();


  useEffect(()=>{
    dispatch(getReplay.initiate({initialState, platformID, searchParams}))
  },[])

    return(
      <>
        {replay?.map((info: VodContentsProps | undefined) => {
          return(
            <>
              <Container key={info?.title}>
                <VodContent vodInfo={info}></VodContent>
              </Container>
              <ContentDivider/>
            </>
          )
        })}
      </>
  )
}

export default VodContainer

const Container = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  list-style: none;
  
  padding: 24px 30px 10px 24px;
  background: #222222;
`