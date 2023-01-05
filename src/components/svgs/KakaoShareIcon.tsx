import * as React from "react";

interface IProps {
    width?: number;
    height?: number;
    color?: string;
}

export const KakaoShareIcon = ({width = 32, height = 32, color = '#000000' }: IProps & JSX.IntrinsicElements['svg']) => (
    <svg width={width} height={height} fill="none" viewBox="0 0 32 32" color={color} xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 5.228c-6.444 0-11.667 4.13-11.667 9.223 0 3.316 2.214 6.221 5.535 7.847-.244.911-.884 3.3-1.012 3.812-.158.634.233.626.488.455.201-.134 3.198-2.17 4.49-3.05.702.104 1.425.16 2.166.16 6.443 0 11.667-4.13 11.667-9.224S22.443 5.228 16 5.228Z"
            fill="#000"
        />
    </svg>
);
