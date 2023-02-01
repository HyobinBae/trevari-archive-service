import * as React from "react"
interface IProps {
  width?: number;
  height?: number;
  color?: string;
  strokeColor?: string;
}


const Calender = ({width=120,height=120} : IProps) => (
  <svg
    width={120}
    height={120}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"

  >
    <g filter="url(#a)">
      <path fill="url(#b)" shapeRendering="crispEdges" d="M10 6h92v92H10z" />
    </g>
    <defs>
      <pattern
        id="b"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#c" transform="translate(-.317 -.19) scale(.00042)" />
      </pattern>
      <filter
        id="a"
        x={0}
        y={0}
        width={120}
        height={120}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={4} dy={8} />
        <feGaussianBlur stdDeviation={7} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_131_4501"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_131_4501"
          result="shape"
        />
      </filter>
      <image
        id="c"
        width={4096}
        height={3209}
      />
    </defs>
  </svg>
)
export default Calender