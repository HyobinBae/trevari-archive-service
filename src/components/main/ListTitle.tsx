import React from 'react';
import styled from '@emotion/styled';
import { body4, body8, heading7, heading9 } from '@trevari/typo';

interface IProps {
  title: string;
  more?: string;
}

const ListTitle = ({ title, more }: IProps) => {
  return (
    <ListHeader>
      <ListTitleWrapper>{title}</ListTitleWrapper>
      {more && (
        <ClickMore href={more} target="_blank">
          <MoreList>전체보기</MoreList>
        </ClickMore>
      )}
    </ListHeader>
  );
};

export default ListTitle;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 80px;
  padding: 20px 0 30px;
  ${({ theme }) => theme.breakPoint.mobile} {
    width: 100%;
    height: 50px;
    padding: 8px 20px 20px;
    background: ${({ theme }) => theme.colors.white};
  } ;
`;

const ListTitleWrapper = styled.div`
  ${heading7};
  ${({ theme }) => theme.breakPoint.mobile} {
    ${heading9};
  } ;
`;

const MoreList = styled.span`
  ${body4};
  ${({ theme }) => theme.breakPoint.mobile} {
    ${body8};
    margin: 5px 0;
    cursor: pointer;
  } ;
`;

const ClickMore = styled.a`
  color: ${({ theme }) => theme.colors.gray600};
  ${({ theme }) => theme.breakPoint.mobile} {
    color: ${({ theme }) => theme.colors.gray500};
  } ;
`;
