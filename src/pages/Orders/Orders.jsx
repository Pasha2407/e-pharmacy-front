import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./Orders.module.css";
import {
  selectGetOrders,
  selectOrdersError,
  selectOrdersIsLoading,
} from "../../redux/orders/ordersSelectors";
import { ordersThunk } from "../../redux/orders/ordersServices";
import { OrdersTable } from "../../components/Tables/OrdersTable/OrdersTable";

export const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectGetOrders);
  const isLoading = useSelector(selectOrdersIsLoading);
  const error = useSelector(selectOrdersError);

  useEffect(() => {
    dispatch(ordersThunk());
  }, [dispatch]);

  return (
    <div className={css.Container}>
      {isLoading && !error ? (
        <i>Loading...</i>
      ) : (
        <OrdersTable ordersData={orders} />
      )}
    </div>
  );
};
