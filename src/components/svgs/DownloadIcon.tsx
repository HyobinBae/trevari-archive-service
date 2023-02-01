import * as React from "react"
interface IProps {
  width?: number;
  height?: number;
  fill?: string
}

const DownloadIcon = ({width =24, height=24, fill='#000' }: IProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.25 14.251V2.7h1.5v11.551l4.36-3.634.89 1.067-6 5-6-5 .89-1.067 4.36 3.634Zm-8-4.574h1.5v10.25h14.5V9.677h1.5v11.75H3.25V9.677Z"
        fill={fill}
      />
    </svg>
  )
}
export default DownloadIcon
