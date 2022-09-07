import React from 'react';

interface IProps {
  width?: number;
  height?: number;
  fill?: string;
}

const Alarm = ({ width = 24, height = 24, fill = '#000' }: IProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.68934 2.25H16.3107L19.75 5.68934V17.25H22V18.75H2V17.25H4.25V5.68934L7.68934 2.25ZM18.25 6.31066V17.25H5.75V6.31066L8.31066 3.75H15.6893L18.25 6.31066ZM8 22.25H16V20.75H8V22.25Z"
        fill={fill}
      />
    </svg>
  );
};

export default Alarm;
