import React from 'react';
import styled from '@emotion/styled';

const imageData = {
  imageSrc: "/images/commentProfile.jpg",
  alt: "프로필이미지"
}
const CircleImage = () => {
  return(
      <Image src={imageData.imageSrc} alt={imageData.alt}/>
  )
}
export default CircleImage

const Image = styled.img`
  border-radius: 50%;
`