import React from 'react';

interface IProps {
  width?: number;
  height?: number;
  fill?: string;
}

const Home = ({ width = 24, height = 24, fill = '#000' }: IProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5 9.7551L12 2.36621L2.5 9.7551V21.4996H9.5V16.4996H14.5V21.4996H21.5V9.7551Z"
        fill={fill}
      />
    </svg>
  );
};

export default Home;
