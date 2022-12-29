import * as React from "react";

interface IProps {
    width?: number;
    height?: number;
    color?: string;
}

export const ShareIcon = ({width = 24, height = 24, color = '#000000' }: IProps & JSX.IntrinsicElements['svg']) => (
    <svg width={width} height={height} fill="none" viewBox="0 0 24 24" color={color} xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m18 7.7-6-5-6 5 .89 1.067 4.36-3.634V16.95h1.5V5.133l4.36 3.634L18 7.7Zm-14.75 2h1.5v10.25h14.5V9.7h1.5v11.75H3.25V9.7Z"
            fill="#000"
        />
    </svg>
);
