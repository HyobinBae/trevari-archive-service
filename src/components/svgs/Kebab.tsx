interface IProps {
  width?: number;
  height?: number;
  fill?: string;
}

export default ({ width = 24, height = 24, fill = 'black' }: IProps & JSX.IntrinsicElements['svg']) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 6.5C13.5 5.675 12.825 5 12 5C11.175 5 10.5 5.675 10.5 6.5C10.5 7.325 11.175 8 12 8C12.825 8 13.5 7.325 13.5 6.5ZM13.5 18.5C13.5 17.675 12.825 17 12 17C11.175 17 10.5 17.675 10.5 18.5C10.5 19.325 11.175 20 12 20C12.825 20 13.5 19.325 13.5 18.5ZM12 11C12.825 11 13.5 11.675 13.5 12.5C13.5 13.325 12.825 14 12 14C11.175 14 10.5 13.325 10.5 12.5C10.5 11.675 11.175 11 12 11Z"
        fill={fill}
      />
    </svg>
  );
};
