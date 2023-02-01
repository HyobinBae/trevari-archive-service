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
        d="M15.105 4 16.5 5.468 10.29 12l6.21 6.532L15.105 20 7.5 12l7.605-8Z"
        fill={fill}
      />
    </svg>
  );
};
