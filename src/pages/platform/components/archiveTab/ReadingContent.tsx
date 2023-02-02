import React from 'react';
import styled from '@emotion/styled';
import {title2} from '@trevari/typo';
import PdfIcon from '../../../../components/svgs/PdfIcon';
import BookIcon from '../../../../components/svgs/BookIcon';
import { MagazineProps } from '../../services/platform.types';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../services/store';
import { setPdfSrc, setPdfTitle, setPlatformParams, setSearchParams } from '../../services/platform.store';


interface IProps {
  magazine?: MagazineProps[] | undefined
}
const ReadingContent: React.FunctionComponent<IProps> = ({magazine}) => {
  const params = new URLSearchParams()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onClickHandler=() =>{
    for(let i=0; i < magazine?.length; i++){
      if(magazine[i].type === 'pdf') {
        dispatch(setPdfSrc(magazine[i].src))
        dispatch(setPdfTitle(magazine[i].title))
        params.set('pdf', magazine[i].title)
        navigate(`/viewer?${params.toString()}`)
      }
    }
  }


  return(
    <>
      {magazine?.map((data: MagazineProps) => {
      if (data.type === 'book'){
        return(
          <Container key={data.title}>
            <IconBox>
              <BookIcon/>
            </IconBox>
            <TextBox href={data.src} >
              <Text>{data.title}</Text>
              <UnderLine/>
            </TextBox>
          </Container>)
      }else if (data.type ==='pdf'){
        return(
          <PdfContainer key={data.title}>
            <IconBox>
              <PdfIcon/>
            </IconBox>
            <TextBox >
              <Text onClick={onClickHandler} >{data.title}</Text>
              <UnderLine/>
            </TextBox>
          </PdfContainer>)
      }
        }
      )}
    </>
  )
}

export default ReadingContent

const Container = styled.li`
  width: 100%;
  
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  list-style: none;
  padding: 0;
  
  margin-bottom: 15px;
  background: #222222;
`

const PdfContainer = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  list-style: none;
  padding: 0;
  
  margin-bottom: 15px;
  background: #222222;
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

const TextBox = styled.a`
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
