import React from 'react';
import cn from 'classnames';

interface IProps {
  width?: number;
  height?: number;
  fill?: string;
  direction?: string;
}

const getDirection = (direction: string) => {
  switch (direction) {
    case 'right':
      return 'rotate(0)';
    case 'down':
      return 'rotate(90deg)';
    case 'left':
      return 'rotate(180deg)';
    case 'up':
      return 'rotate(270deg)';
  }
};

// tslint:disable:max-line-length
export default ({
  width = 40,
  height = 40,
  direction = 'right',
  fill = '#000',
}: IProps & JSX.IntrinsicElements['svg'] & React.SVGProps<SVGPathElement>) => {
  return (
    <svg
      className={cn('line-arrow', direction)}
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      style={{ transform: getDirection(direction) }}
    >
      <path d="M8.33325 20H31.6666" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 26.6667L31.6667 20" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 13.3333L31.6667 19.9999" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
