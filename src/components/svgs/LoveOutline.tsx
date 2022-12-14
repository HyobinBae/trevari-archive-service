import React from 'react';

interface IProps {
  width?: number;
  height?: number;
}

const LoveOutline = ({ width = 24, height = 24 }: IProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.4"
        d="M7.48779 1.875L10 3.9375L12.5123 1.875H16.0295L18.5417 4.45313V10.125L10 18.375L1.45837 10.125V4.45313L3.97063 1.875H7.48779Z"
        fill="#CACAC8"
      />
      <path
        d="M9.52414 4.51717L10 4.90787L10.4759 4.51717L12.7807 2.625H15.7131L17.7917 4.75812V9.80668L10 17.3323L2.20837 9.80668V4.75812L4.28699 2.625H7.21936L9.52414 4.51717Z"
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default LoveOutline;
