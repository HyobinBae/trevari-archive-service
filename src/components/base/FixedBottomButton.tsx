import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@trevari/components';
import { heading11 } from '@trevari/typo';

interface IProps {
  text: string;
  onClick: () => void;
}

const FixedBottomButton = ({ text, onClick }: IProps) => {
  return (
    <FixedButtonLayer>
      <ButtonWrap size="large" onClick={onClick}>
        {text}
      </ButtonWrap>
    </FixedButtonLayer>
  );
};

export default FixedBottomButton;

const FixedButtonLayer = styled.div`
  position: fixed;
  bottom: 0;
  height: 74px;
  padding: 13px 20px 13px 20px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px -4px 10px -4px rgba(0, 0, 0, 0.2);
  z-index: 50;
  max-width: 500px;
  width: 100%;
`;

const ButtonWrap = styled(Button)`
  width: 100%;
  height: 50px;
  align-items: center;
  display: flex;
  justify-content: center;
  background: ${props =>
    props.disabled ? ({ theme }) => theme.colors.gray100 : ({ theme }) => theme.colors.orange900};
  color: ${props => (props.disabled ? ({ theme }) => theme.colors.gray400 : ({ theme }) => theme.colors.white)};
  border-radius: 3px;
  ${heading11};
  border: none;
`;
