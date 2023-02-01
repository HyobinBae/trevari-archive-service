import React from 'react';
import VodIcon from '../../../../components/svgs/VodIcon';
import styled from '@emotion/styled';
import {title2} from '@trevari/typo';
import { ReplayListProps } from '../../services/platform.types';
import { useAppDispatch } from '../../../../services/store';
import { setVodSrc, setVodTitle } from '../../services/platform.store';


interface IProps {
  vodInfo?: ReplayListProps|undefined
}

const VodContent: React.FunctionComponent<IProps> = ({vodInfo}) => {
  const dispatch = useAppDispatch()
  const onClickHandler = () => {
    dispatch(setVodSrc(vodInfo?.src))
    dispatch(setVodTitle(vodInfo?.title))
  }


  return(
    <>
      <Container onClick={onClickHandler} key={vodInfo?.description}>
        <IconBox>
          <VodIcon/>
        </IconBox>
        <TextBox>
          <Text>{vodInfo?.description}</Text>
          <UnderLine/>
        </TextBox>
      </Container>
    </>
  )
}

export default VodContent

const Container = styled.li`
  width: 100%;
  
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  list-style: none;
  padding: 0;
  
  margin-bottom: 15px;
  background: #222222;
  
  cursor: pointer;
`
const IconBox = styled.div`
  width: 24px;
  height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 8px;
  color: #ADADAA;
`
const TextBox = styled.div`
  max-width: 95%;
  border:none;
  background: #222222;
`

const Text = styled.div`
  width: 100%;
  height: 24px;

  ${title2};
  color: #ADADAA;

  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const UnderLine = styled.div`
  width: 100%;
  height: 1px;
  background: #ADADAA;
`