import React from 'react';

interface IProps {
  width?: number;
  height?: number;
  fill?: string;
}

export default ({ width = 8, height = 10, fill = '#FF1D0F' }: IProps & JSX.IntrinsicElements['svg']) => {
  return (
    <svg width={width} height={height} viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="4" cy="6" r="4" fill={fill}/>
    </svg>

  );
};
