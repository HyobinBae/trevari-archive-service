import React from 'react';

interface IProps {
  width?: number;
  height?: number;
  color?: string;
}

const LoveFilled = ({ width = 24, height = 24, color = '#000' }: IProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.33436 2.5H5.13939L2 5.7153V11.9679L12 21.6976L22 11.9679V5.7153L18.8606 2.5H14.6656L12 4.77508L9.33436 2.5Z"
        fill={color}
      />
    </svg>
  );
};

export default LoveFilled;
