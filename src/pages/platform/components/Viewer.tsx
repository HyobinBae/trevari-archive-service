import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import styled from '@emotion/styled';
import { useAppDispatch, useAppSelector } from '../../../services/store';
import { body6, heading10 } from '@trevari/typo';

import DownloadIcon from '../../../components/svgs/DownloadIcon';
import LeftChevron from '../../../components/svgs/LeftChevron';
import RightChevron24px from '../../../components/svgs/RightChevron24px';
import { useNavigate, useParams } from 'react-router-dom';
import Arrow from '../../../components/svgs/Arrow';
import { useWindowSize } from '../../../utils/windowResize';
import { getPDFInfo } from '../../../api/backend';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Viewer = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  const navigate = useNavigate();
  const { height } = useWindowSize();
  const heightStyle = { height: height - 110 };
  const maxHeightStyle = { maxHeight: height - 100 };

  const dispatch = useAppDispatch();
  const pdfInfo = useAppSelector(state => state.platform.pdfInfo);
  const platformID = useAppSelector(state => state.platform.getPlatformParams);
  const pdfSrc = useAppSelector(state => state.platform.getPdfSrc);
  const pdfTitle = useAppSelector(state => state.platform.getPdfTitle);

  const { magazineID } = useParams();
  const onDocumentLoadSuccess = ({ numPages }: null | number[]) => {
    setNumPages(numPages);
  };
  const changePage = (offset: number) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  };

  const previousPage = () => {
    pageNumber > 1 && changePage(-1);
  };

  const nextPage = () => {
    pageNumber < numPages && changePage(1);
  };

  const goToPlatform: (e: React.MouseEvent<HTMLButtonElement>) => void = () => {
    navigate(`/platform/${platformID}`);
  };

  useEffect(() => {
    dispatch(getPDFInfo.initiate({ platformID, magazineID }));
  });

  console.log(pdfInfo);
  return (
    <ViewerContainer>
      <ViewerHeader>
        <HeaderButtonBox onClick={goToPlatform}>
          <Arrow fill="#FFFFFF" />
        </HeaderButtonBox>
        <Title>{pdfTitle}</Title>
        <DownloadButton href={pdfSrc} target={'_blank'}>
          <DownloadIcon fill={'white'} />
        </DownloadButton>
      </ViewerHeader>
      <MainContainer style={heightStyle}>
        <ViewerMain file={{ url: pdfSrc }} onLoadSuccess={onDocumentLoadSuccess}>
          <SinglePage style={maxHeightStyle} pageNumber={pageNumber} />
        </ViewerMain>
      </MainContainer>
      <ButtonBox>
        <PrevButton type="button" disabled={pageNumber < 1} onClick={previousPage}>
          <LeftChevron />
        </PrevButton>
        <Index>
          {pageNumber}/{numPages}
        </Index>
        <NextButton type="button" disabled={pageNumber === numPages} onClick={nextPage}>
          <RightChevron24px />
        </NextButton>
      </ButtonBox>
    </ViewerContainer>
  );
};

export default Viewer;

const ViewerContainer = styled.div`
  max-width: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #222222;
`;

const ViewerHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #222222;

  padding: 5px 20px;
`;
const HeaderButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
const Title = styled.h1`
  color: white;
  ${heading10};

  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const DownloadButton = styled.a``;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ViewerMain = styled(Document)`
  .react-pdf__Document {
    background: black;
    width: 500px;
  }
`;
const SinglePage = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;

  .react-pdf__Page__canvas {
    display: flex;
    justify-content: center;
    align-items: center;

    max-width: 95%;
    height: auto;
  }

  .react-pdf__Page__textContent {
    display: none;
  }

  .react-pdf__Page__annotations {
    display: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  overflow: scroll;
`;

const ButtonBox = styled.div`
  width: 100px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding: 5px 20px;
`;
const PrevButton = styled.button`
  width: 60px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-style: none;
  border-radius: 5px 0 0 5px;
  opacity: 0.9;

  background: white;
  cursor: pointer;
`;

const Index = styled.div`
  width: 60px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 5px 0 5px;
  opacity: 0.9;

  background: white;

  ${body6}
`;

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
`;
