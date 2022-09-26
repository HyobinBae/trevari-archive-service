import React from 'react';

interface IProps {
  width?: number;
  height?: number;
  color?: string;
}

const MyFilled = ({ width = 24, height = 24, color = '#000' }: IProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 2H8.5V9H15.5V2ZM5.68934 11.25H18.3107L21.75 14.6893V21.75H2.25V14.6893L5.68934 11.25Z"
        fill={color}
      />
    </svg>
  );
};

export default MyFilled;
