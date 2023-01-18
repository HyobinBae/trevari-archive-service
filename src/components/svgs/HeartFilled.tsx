import * as React from "react"
interface IProps {
  width?: number;
  height?: number;
  color?: string;
  strokeColor?: string;
}
const HeartFilled = ({width =18, height=18, color='#FF7900'}: IProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.604 3.42 9 3.747l.397-.325 2.34-1.921h3.029l2.15 2.207V8.86L9 16.506 1.083 8.86V3.707L3.234 1.5h3.03l2.34 1.92Z"
        fill={color}
        stroke={color}
        strokeWidth={1.25}
      />
    </svg>
  )
}
export default HeartFilled
