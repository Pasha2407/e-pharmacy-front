import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectGetOrders,
  selectOrdersError,
  selectOrdersIsLoading,
  selectOrdersPage,
  selectOrdersUserName,
} from '../redux/orders/ordersSelectors';

import { ordersThunk } from '../redux/orders/ordersServices';
import { setPage } from '../redux/orders/ordersSlice';
import { OrdersPage } from '../components/OrdersPage/OrdersPage';

export const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectGetOrders);
  const isLoading = useSelector(selectOrdersIsLoading);
  const error = useSelector(selectOrdersError);
  const page = useSelector(selectOrdersPage);
  const userName = useSelector(selectOrdersUserName);

  useEffect(() => {
    dispatch(ordersThunk({ userName, page }));
  }, [userName, page, dispatch]);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return (
    <OrdersPage
      orders={orders}
      isLoading={isLoading}
      error={error}
      page={page}
      handlePageChange={handlePageChange}
    />
  );
};
