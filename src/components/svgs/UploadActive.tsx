interface Props {
  width?: number;
  height?: number;
  // onClick: () => void;
}
export default ({ width = 32, height = 32 }: Props) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // onClick={onClick}
  >
    <g clipPath="url(#clip0_815_5293)">
      <circle cx="16" cy="16" r="16" fill="#FF7900" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.2568 8.97678L15.2568 25.7939L16.7568 25.7939L16.7568 8.97923L23.4906 15.3389L24.5205 14.2483L16.0055 6.20643L7.49057 14.2483L8.52051 15.3389L15.2568 8.97678Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_815_5293">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
