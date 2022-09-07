import React from 'react';

interface IProps {
  width?: number;
  height?: number;
  color?: string;
}

const HomeFilled = ({ width = 24, height = 24, color = '#6E6E6C' }: IProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.03955L21.75 9.83955V21.75H14.25V16.75H9.75V21.75H2.25V9.83955L12 2.03955ZM3.75 10.5605V20.25H8.25V15.25H15.75V20.25H20.25V10.5605L12 3.96049L3.75 10.5605Z"
        fill={color}
      />
    </svg>
  );
};

export default HomeFilled;
