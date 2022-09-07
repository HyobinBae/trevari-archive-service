interface IProps {
  width?: number;
  height?: number;
  color?: string;
}

const MyOutline = ({ width = 24, height = 24, color = '#6E6E6C' }: IProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 3.5H14V7.5H10V3.5ZM8.5 9V2H15.5V9H8.5ZM18.3107 11.25H5.68934L2.25 14.6893V21.75H21.75V14.6893L18.3107 11.25ZM3.75 15.3107L6.31066 12.75H17.6893L20.25 15.3107V20.25H3.75V15.3107Z"
        fill={color}
      />
    </svg>
  );
};

export default MyOutline;
