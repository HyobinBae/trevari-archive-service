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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.03408 2.25H9.42654L12 4.44641L14.5735 2.25H18.9659L22.25 5.61349V12.0735L12 22.0464L1.75 12.0735V5.61349L5.03408 2.25ZM5.66592 3.75L3.25 6.22434V11.4401L12 19.9536L20.75 11.4401V6.22434L18.3341 3.75H15.1265L12 6.41846L8.87346 3.75H5.66592Z"
        fill={color}
      />
    </svg>
  );
};

export default LoveOutline;
