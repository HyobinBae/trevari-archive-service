import * as React from "react";

interface IProps {
    width?: number;
    height?: number;
    color?: string;
}

export const LinkShareIcon = ({width = 26, height = 24, color = '#000000' }: IProps & JSX.IntrinsicElements['svg']) => (
    <svg width={width} height={height} fill="none" viewBox="0 0 26 24" color={color} xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m20.853.87-.22-.22H17.184l-.22.22-3.771 3.77-.471.472 1.06 1.061.472-.471 3.551-3.552h2.207l3.803 3.803V8.16l-7.103 7.104h-2.207l-3.08-3.08-1.06 1.06 3.3 3.3.219.22H17.333l.22-.22L25.096 9l.22-.22V5.333l-.22-.22L20.853.87ZM5.18 23.144l.22.22H8.848l.22-.22 3.771-3.772.472-.471-1.061-1.06-.471.47-3.552 3.552H6.02L2.217 18.06v-2.207L9.32 8.75h2.207l3.08 3.08 1.06-1.06-3.3-3.3-.219-.22H8.7l-.22.22-7.543 7.542-.22.22V18.68l.22.22 4.243 4.243Z"
            fill="#000"
        />
    </svg>
);
