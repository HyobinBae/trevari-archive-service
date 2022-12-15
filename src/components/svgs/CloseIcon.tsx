import React from 'react';

interface IProps {
  width?: number;
  height?: number;
  fill?: string;
}

export default ({ width = 24, height = 24, fill = 'black' }: IProps & JSX.IntrinsicElements['svg']) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9965 13.1278L18.4301 19.5614L19.5614 18.43L13.1278 11.9964L19.5629 5.56136L18.4315 4.42999L11.9965 10.865L5.56142 4.42999L4.43005 5.56136L10.8651 11.9964L4.4315 18.43L5.56287 19.5614L11.9965 13.1278Z"
        fill={fill}
      />
    </svg>
  );
};
