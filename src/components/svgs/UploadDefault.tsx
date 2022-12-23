interface Props {
  width?: number;
  height?: number;
}
export default ({ width = 32, height = 32 }: Props) => (
  <svg width={width} height={height} viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_815_6063)">
      <circle cx="16" cy="16.5" r="16" fill="#F7F7F5" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.2568 9.47678L15.2568 26.2939L16.7568 26.2939L16.7568 9.47923L23.4906 15.8389L24.5205 14.7483L16.0055 6.70643L7.49057 14.7483L8.52051 15.8389L15.2568 9.47678Z"
        fill="#CACAC8"
      />
    </g>
    <defs>
      <clipPath id="clip0_815_6063">
        <rect width="32" height="32" fill="white" transform="translate(0 0.5)" />
      </clipPath>
    </defs>
  </svg>
);
