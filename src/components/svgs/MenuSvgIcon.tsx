import React from 'react';

interface IProps {
  width?: number;
  height?: number;
  fill?: string;
}

export default ({ width = 24, height = 24, fill = 'black' }: IProps & JSX.IntrinsicElements['svg']) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3 5.5L21 5.5V3H3V5.5ZM21 13.25L3 13.25V10.75L21 10.75V13.25ZM21 21L3 21V18.5L21 18.5V21Z" fill={fill}/>
    </svg>
  );
};
