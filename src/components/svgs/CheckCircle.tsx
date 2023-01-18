import * as React from "react"

interface IProps  {
  width?: number;
  height?: number;
}

const CheckCircle = ({width=20, height=20}:IProps) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"

  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm.064-4.506 3.5-4-1.128-.988-2.973 3.397L7.53 8.97l-1.06 1.06 2.5 2.5.567.567.527-.603Z"
      fill="#00B73D"
    />
  </svg>
)

export default CheckCircle
