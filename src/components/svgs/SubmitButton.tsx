import * as React from "react"
interface IProps {
  width?: number;
  height?: number;
  circleColor?: string;
  arrowColor?: string;
}

const SubmitButton = ({width=32, height=32, circleColor='#4E4E4C', arrowColor='#838380'}:IProps) => (
  <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#a)">
      <circle cx={16} cy={16} r={16} fill={circleColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.257 8.98v16.817h1.5V8.982l6.734 6.36 1.03-1.09-8.515-8.043-8.515 8.042 1.03 1.09 6.736-6.361Z"
        fill={arrowColor}
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default SubmitButton
