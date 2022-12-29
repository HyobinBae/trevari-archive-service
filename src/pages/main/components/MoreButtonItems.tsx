import React from 'react';
import styled from '@emotion/styled';
import { ListItem, resetButtonCss } from '@trevari/components';

interface IProps {
  title: string;
  actions: Action[];
}
interface Action {
  item: JSX.Element;
  onAction: () => void;
}
export const MoreButtonItems = ({ title, actions }: IProps) => {
  return (
    <>
      <Base>
        <TitleWrap>{title}</TitleWrap>
        <ItemsWrap>
          {actions.map(({ item, onAction }) => (
            <ListItemWrap key={item} ignorePadding>
              <Button onClick={onAction} red={false}>
                {item}
              </Button>
            </ListItemWrap>
          ))}
        </ItemsWrap>
      </Base>
    </>
  );
};

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
    padding-bottom: 40px;
    padding-top: 20px;
  }
`;

const Button = styled.button<{ red: boolean }>`
  ${resetButtonCss}
  ${({ theme }) => theme.breakPoint.mobile} {
    margin-bottom: 6px;
  }
`;

const TitleWrap = styled.div`
  ${({ theme }) => theme.breakPoint.mobile} {
  font: inherit;
  font-weight: bold;
  padding: 6px 20px;
  padding-top: 0;
  text-align: left;
  width: 100%;
  height: 100%;
  background: white;
  background-color: white;
  outline: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }
`;

const ItemsWrap = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%
  
`;
