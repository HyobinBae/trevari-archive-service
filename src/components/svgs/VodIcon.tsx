import * as React from "react"

interface IProps {
  width?: number;
  height?: number;
}

const VodIcon = ({ width=24, height=24}:IProps) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx={12} cy={12} r={7.4} stroke="#ADADAA" strokeWidth={1.2} />
    <path
      d="M14.175 10.877a1 1 0 0 1 0 1.732l-2.837 1.639a1 1 0 0 1-1.5-.866v-3.277a1 1 0 0 1 1.5-.866l2.838 1.638Z"
      fill="#ADADAA"
    />
  </svg>
)

export default VodIcon
