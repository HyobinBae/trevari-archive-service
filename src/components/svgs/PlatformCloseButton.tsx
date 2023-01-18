import * as React from "react"

interface IProps {
  width?: number;
  height?: number;
}
const PlatformCloseButton = ({ width=24, height=24}:IProps) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"

  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m11.997 13.127 6.433 6.434 1.131-1.131-6.433-6.434 6.435-6.435-1.131-1.131-6.435 6.435L5.562 4.43 4.43 5.56l6.435 6.435-6.433 6.434 1.131 1.131 6.434-6.434Z"
      fill="#fff"
    />
  </svg>
)

export default PlatformCloseButton
