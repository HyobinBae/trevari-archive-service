import React, { useRef, useLayoutEffect, useState }from 'react';

import videojs from 'video.js';
import styled from '@emotion/styled';
import LiveButton from './LiveButton';
import { useAppSelector } from '../../../../services/store';

interface VideoPlayerProps {
  videoJsOptions: videojs.PlayerOptions;
}


const VodPlayerBox = () => {
  const vodSrc = useAppSelector((state) => state.platform.getVodSrc);
  const VideoBoxRef = useRef<HTMLStyleElement>(0);
  const [boxWidth, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(VideoBoxRef.current.clientWidth),[]
  })


  const videoJsOptions = {
    autoplay: true,
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    width: boxWidth,
    controls: true,
    src: vodSrc,
    sources: {
      src: vodSrc,
      type: 'video/mp4'
    }
  }

  return(
    <Box ref={VideoBoxRef} >
      <VideoPlayer{...videoJsOptions}/>
    </Box>
  )
}
export default VodPlayerBox

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  min-height: 250px;

  background: #2C2C2A;
`

const VideoPlayer = styled.video``