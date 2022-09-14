import React, { useEffect } from 'react';

import { useAppSelector } from 'store';
import { Base } from 'pages/main/styles/main.style';
import { selectTagOrders } from 'pages/main/api/main.slice';
import { useGetCurationDisplayOrdersQuery, useGetCurationsQuery } from 'pages/main/api';

const random = Math.random();

// TODO 작업해야 함
const CurationList = () => {
  const tagOrders = useAppSelector(selectTagOrders);

  const options = {
    where: {
      types: ['함께 만드는 클럽', '클럽장 있는 클럽', '트레바리가 디자인한 클럽', '함께 듣는 클럽'],
      containsFullClub: true,
      isClosed: false,
      randomSeed: random,
      tagIDs: tagOrders.slice(0, 25),
    },
  };
  const {
    data: displayOrders,
    isLoading: ordersLoading,
    error: ordersError,
  } = useGetCurationDisplayOrdersQuery({ where: { type: 'tag', isDisplayed: true } });

  useEffect(() => {
    console.log('displayOrders', displayOrders);
  }, [ordersLoading]);
  const { data: curations, isLoading: curationsLoading, error: curationsError } = useGetCurationsQuery(options);
  return <Base></Base>;
};

export default CurationList;
