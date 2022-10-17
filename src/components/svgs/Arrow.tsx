import React from 'react';

interface IProps {
  width?: number;
  height?: number;
  fill?: string;
  direction?: 'top' | 'right' | 'bottom' | 'left';
}

export default ({
  width = 24,
  height = 24,
  fill = 'black',
  direction = 'left',
}: IProps & JSX.IntrinsicElements['svg']) => {
  const getDirectionStyle = (direction: string) => {
    switch (direction) {
      case 'left':
        return '0deg';
      case 'top':
        return '90deg';
      case 'right':
        return '180deg';
      case 'bottom':
        return '270deg';
      default:
        return '0deg';
    }
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      style={{ transform: `rotate(${getDirectionStyle(direction)})` }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.18376 12.75L22 12.75V11.25L5.18436 11.25L11.5449 4.51529L10.4544 3.48535L2.41249 12.0003L10.4544 20.5153L11.5449 19.4854L5.18376 12.75Z"
        fill={fill}
      />
    </svg>
  );
};
