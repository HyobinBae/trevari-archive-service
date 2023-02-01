import React from 'react';

interface IProps {
  width?: number;
  height?: number;
  fill?: string;
}

export default ({ width = 24, height = 24, fill = 'black' }: IProps & JSX.IntrinsicElements['svg']) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill='none' xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.895 20 7.5 18.532 13.71 12 7.5 5.468 8.895 4l7.605 8-7.605 8Z"
        fill={fill}
      />
    </svg>
  );
};
