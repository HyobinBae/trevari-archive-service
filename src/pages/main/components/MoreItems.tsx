import React from 'react';
import styled from '@emotion/styled';
import { ListItem, resetButtonCss } from '@trevari/components';

interface IProps {
  actions: Action[];
}
interface Action {
  text: string;
  onAction: () => void;
}
const MoreItems = ({ actions }: IProps) => {
  return (
    <>
      <Base>
        {actions.map(({ text, onAction }) => (
          <ListItemWrap key={text} ignorePadding>
            <Button onClick={async () => {
              await onAction()
            }} red={text === '신고하기'}>
              {text}
            </Button>
          </ListItemWrap>
        ))}
      </Base>
    </>
  );
};

export default MoreItems;

const Base = styled.div`
  // position: absolute;
  // top: 30px;
  // right: -20px;
  // width: 170px;
  width: 100%;
  max-width: 500px;
  background: white;
  border-radius: 8px;
  padding: 12px 0;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.16));
  li {
    margin-bottom: unset;
  }
  button {
    margin-bottom: unset;
  }
`;
const ListItemWrap = styled(ListItem)`
  ${({ theme }) => theme.breakPoint.mobile} {
    margin-bottom: 6px;
  }
`;

const Button = styled.button<{ red: boolean }>`
  ${resetButtonCss}
  font: inherit;
  padding: 6px 20px;
  text-align: left;
  width: 100%;
  height: 100%;
  color: ${({ theme, red }) => (red ? theme.colors.red900 : theme.colors.black)};
  :hover {
    background-color: ${({ theme }) => theme.colors.orange50};
  }
  ${({ theme }) => theme.breakPoint.mobile} {
    margin-bottom: 6px;
  }
`;
