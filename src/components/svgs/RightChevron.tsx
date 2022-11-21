import React from 'react';

interface IProps {
  width?: number;
  height?: number;
  fill?: string;
}

export default ({ width = 14, height = 14, fill = 'white' }: IProps & JSX.IntrinsicElements['svg']) => {
  return (
    <svg width={width} height={height} viewBox="0 0 14 14" fill='none' xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.28441 11.5699L4.15304 10.4386L7.58736 7.00426L4.15304 3.56995L5.28441 2.43858L9.8501 7.00426L5.28441 11.5699Z" fill={fill}/>
    </svg>
  );
};
