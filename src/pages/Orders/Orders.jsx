import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectGetOrders,
  selectOrdersError,
  selectOrdersIsLoading,
  selectOrdersPage,
  selectOrdersUserName,
} from '../../redux/orders/ordersSelectors';

import { ordersThunk } from '../../redux/orders/ordersServices';
import { setPage } from '../../redux/orders/ordersSlice';

import { Container } from 'components/Container/Container';
import { Filter } from 'components/Filter/Filter';
import { OrdersTable } from 'components/Tables/OrdersTable/OrdersTable';

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
    <Container>
      <Filter />
      {isLoading && !error ? (
        <i>Loading...</i>
      ) : (
        <OrdersTable ordersData={orders} />
      )}
      <div>
        <button
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={() => handlePageChange(page + 1)}>Next</button>
      </div>
    </Container>
  );
};
