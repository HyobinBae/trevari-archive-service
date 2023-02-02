import React, { useState } from 'react';
import { Document, Page,pdfjs } from 'react-pdf';
import styled from '@emotion/styled';
import { useAppSelector } from '../../../services/store';
import { body6, heading10 } from '@trevari/typo';

import DownloadIcon from '../../../components/svgs/DownloadIcon';
import LeftChevron from '../../../components/svgs/LeftChevron';
import RightChevron24px from '../../../components/svgs/RightChevron24px';
import { useNavigate, useParams } from 'react-router-dom';
import Arrow from '../../../components/svgs/Arrow';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Viewer= () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  // const [pageScale,setPageScale] = useState(1);
  const navigate = useNavigate()
  const platformID = useAppSelector(state => state.platform.getPlatformParams)

  const pdfSrc = 'https://d270xxc7m3spo6.cloudfront.net/99273A485C51D81B16.pdf'
  // const pdfSrc = useAppSelector((state)=> state.platform.getPdfSrc)
  const pdfTitle = useAppSelector((state)=> state.platform.getPdfTitle)
  const onDocumentLoadSuccess = ({numPages}:null|number[]) =>{
    setNumPages(numPages)
  }

  const changePage = (offset:number) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  };

  const previousPage = () => {
    pageNumber>1 &&
    changePage(-1);
  };

  const nextPage = () => {
    pageNumber<numPages &&
    changePage(1);
  };

  const goToPlatform :(e:React.MouseEvent<HTMLButtonElement>) => void = () => {
    navigate(`/platform/${platformID}`)
  };

  return(
    <ViewerContainer>
      <ViewerHeader>
        <HeaderButtonBox onClick={goToPlatform} >
          <Arrow fill='#FFFFFF'/>
        </HeaderButtonBox>
        <Title>{pdfTitle}</Title>
        <DownloadButton href={pdfSrc} download>
          <DownloadIcon fill={'white'}/>
        </DownloadButton>
      </ViewerHeader>
      <ViewerMain
        file={{url: pdfSrc}}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <SinglePage
          pageNumber={pageNumber}
        />

      </ViewerMain>
      <ButtonBox>
        <PrevButton
          type="button"
          disabled={pageNumber < 1}
          onClick={previousPage}
        >
          <LeftChevron/>
        </PrevButton>
        <Index>{pageNumber}/{numPages}</Index>
        <NextButton
          type="button"
          disabled={pageNumber === numPages}
          onClick={nextPage}
        >
          <RightChevron24px/>
        </NextButton>
      </ButtonBox>

    </ViewerContainer>
  )
}

export default Viewer

const ViewerContainer = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ViewerHeader = styled.div`
  max-width: 500px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #222222;

  padding: 10px 20px;
`
const HeaderButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  cursor: pointer;
`
const Title = styled.h1`
  color:white;
  ${heading10}
`
const DownloadButton = styled.a``

const ViewerMain = styled(Document)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  
  max-width: 500px;

  .react-pdf__Page {
    background: black;
    width: 100%;
    height: 100%;
  }
`
const SinglePage= styled(Page)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  
  .react-pdf__Page__canvas {
    max-width: 500px;
    width: 90%;
  }
  overflow: scroll;

  .react-pdf__Page__textContent{
    display: none;
  }

  .react-pdf__Page__annotations{
    display: none;
  }
`

const ButtonBox = styled.div`
  width: 100px;
  
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
  
`
const PrevButton = styled.button`
  width: 60px;
  height: 40px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  border-style: none;
  border-radius: 5px 0 0 5px ;
  opacity: 0.9;
  
  background: white;
  cursor: pointer;
`

const Index = styled.div`
  padding: 0 5px 0 5px;
  opacity: 0.9;
  
  ${body6}
`


const NextButton = styled.button`
  width: 60px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-style: none;
  border-radius: 0 5px 5px 0;
  opacity: 0.9;

  background: white;
  cursor: pointer;
`


