import React from 'react';

interface IProps {
  width?: number;
  height?: number;
  color?: string;
  strokeColor?: string;
}

const LoveFilled = ({ width = 24, height = 24, color = '#FF7900', strokeColor = '#000' }: IProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path
        d="M11.5241 5.30467L12 5.69537L12.4759 5.30467L15.2831 3H18.9189L21.5 5.64874V11.8317L12 21.0073L2.5 11.8317V5.64874L5.08107 3H8.71687L11.5241 5.30467Z"
        fill={color}
        stroke={strokeColor}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default LoveFilled;
