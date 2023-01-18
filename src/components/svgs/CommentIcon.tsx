import * as React from "react"
import { resetUlCss } from '@trevari/components';


interface IProps {
  width?: number;
  height?: number;
  color?: string;
  strokeColor?: string;
}
const CommentIcon = ({width= 20, height= 20}: IProps) => {
  return(
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"

    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.833 15v2.5l-1.5-1-2.25-1.5H1.667V2.5h16.666V15h-2.5Zm-1.5-1.5v1.197l-1.418-.945-.378-.252H3.167V4h13.666v9.5h-2.5Zm-8.5-3.917a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Zm4.167 0a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Zm5-.833a.833.833 0 1 1-1.667 0 .833.833 0 0 1 1.667 0Z"
        fill="#ADADAA"
      />
    </svg>
  )
}


export default CommentIcon
