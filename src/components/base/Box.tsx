import React, { CSSProperties, ReactNode } from 'react';
import styled from '@emotion/styled';

interface IProps {
  children: ReactNode;
  style?: CSSProperties;
  onClick?: () => void;
}

const Box = ({ children, style = {}, onClick = () => ({}) }: IProps) => {
  return (
    <Base style={style} onClick={onClick}>
      {children}
    </Base>
  );
};

export default Box;

export const Base = styled.div<{ style: any }>`
  ${props => props.style};
`;
