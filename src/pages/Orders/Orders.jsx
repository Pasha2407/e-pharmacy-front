import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectGetOrders,
  selectOrdersError,
  selectOrdersIsLoading,
} from "../../redux/orders/ordersSelectors";
import { ordersThunk } from "../../redux/orders/ordersServices";

export const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectGetOrders);
  const isLoading = useSelector(selectOrdersIsLoading);
  const error = useSelector(selectOrdersError);

  useEffect(() => {
    dispatch(ordersThunk());
  }, [dispatch]);

  return (
    <div>
      Orders
      {isLoading && !error ? (
        <i>Loading...</i>
      ) : (
        orders?.map((item) => <div key={item._id}>{item.name}</div>)
      )}
    </div>
  );
};
