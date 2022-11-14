import React from 'react';

interface IProps {
  width?: number;
  height?: number;
}

const LoveOutlineOpacityApplied = ({ width = 24, height = 24 }: IProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path
        opacity="0.4"
        d="M8.98529 2.25L12 4.725L15.0147 2.25H19.2353L22.25 5.34375V12.15L12 22.05L1.75 12.15V5.34375L4.76471 2.25H8.98529Z"
        fill="#CACAC8"
      />
      <path
        d="M11.5241 5.30467L12 5.69537L12.4759 5.30467L15.2831 3H18.9189L21.5 5.64874V11.8317L12 21.0073L2.5 11.8317V5.64874L5.08107 3H8.71686L11.5241 5.30467Z"
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default LoveOutlineOpacityApplied;
