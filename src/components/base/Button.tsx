import React from 'react';

interface IProps {
  onClick: () => void;
  disabled: boolean;
}

const Button = ({ onClick, disabled }: IProps) => {
  return <button onClick={onClick} disabled={disabled}></button>;
};

export default Button;
