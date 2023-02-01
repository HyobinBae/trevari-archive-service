import React, { useState } from 'react';
import { Document, Page,pdfjs } from 'react-pdf';
import styled from '@emotion/styled';
import { useAppSelector } from '../../../services/store';

import Arrow from '../../../components/svgs/Arrow';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Viewer= () => {


  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  // const [pageScale,setPageScale] = useState(1);

  const pdfSrc = useAppSelector((state)=> state.platform.getPdfSrc)
  console.log(pdfSrc)

  const onDocumentLoadSuccess = (numPages:number) =>{
    setNumPages(numPages)
  }

  const changePage = (offset:number) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };



  return(
    <ViewerContainer>
      <ViewerMain
        file={pdfSrc}
        onLoadSuccess={() => {onDocumentLoadSuccess}}
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
          <Arrow/>
        </PrevButton>
        <Index>{pageNumber}/{numPages}</Index>
        <NextButton
          type="button"
          disabled={pageNumber === numPages}
          onClick={nextPage}
        >
          <Arrow direction={'right'}/>
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
  
  position: absolute;
  left: 40%;
  bottom: 15%;
  
  transform: translate(-50,-50);
  
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
`

const Index = styled.div`
  padding: 0 5px 0 5px;
  opacity: 0.9;
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

`


