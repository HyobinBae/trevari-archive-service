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
        d="M18.25 8.99231C18.7853 8.9593 19.2921 8.82101 19.75 8.59788V17.25H22V18.75H2V17.25H4.25V5.68934L7.68934 2.25H15.0953C14.6946 2.67307 14.3854 3.18361 14.1992 3.75H8.31066L5.75 6.31066V17.25H18.25V8.99231ZM16 21.75H8V20.25H16V21.75Z"
        fill={fill}
      />
      <circle cx="18" cy="5" r="3" fill="#FF7900" />
    </svg>
  );
};
