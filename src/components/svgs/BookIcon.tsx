import * as React from "react"

interface IProps {
  width?: number;
  height?: number;
  color?: string;
  strokeColor?: string;
}

const BookIcon = ({width=24,height=24} : IProps) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 19V5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1Z"
      stroke="#ADADAA"
      strokeWidth={1.2}
    />
    <path fill="#ADADAA" d="M8 6h9v1H8zM8 8h9v1H8zM8 10h6v1H8z" />
  </svg>
)

export default BookIcon
