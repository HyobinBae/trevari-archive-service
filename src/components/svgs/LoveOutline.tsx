import React from 'react';

interface IProps {
  width?: number;
  height?: number;
  color?: string;
}

const LoveOutline = ({ width = 24, height = 24, color = '#000' }: IProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path
        d="M11.5627 6.21065L12.0312 6.58547L12.4998 6.21065L14.9506 4.25H18.0956L20.3125 6.46691V11.6759L12.0312 19.4701L3.75 11.6759V6.46691L5.96691 4.25H9.11191L11.5627 6.21065Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default LoveOutline;
