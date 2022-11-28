import React from 'react';

interface IProps {
  width?: number;
  height?: number;
  fill?: string;
}

export default ({ width = 24, height = 25, fill = 'black' }: IProps & JSX.IntrinsicElements['svg']) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M11.25 13.25V22.5H12.75V13.25H22V11.75H12.75V2.5H11.25V11.75H2V13.25H11.25Z" fill={fill}/>
    </svg>
  );
};
