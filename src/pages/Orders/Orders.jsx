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
import { Search } from 'components/Search/Search';
import { TableContainer } from 'components/TableContainer/TableContainer';
import { OrdersTable } from 'components/Tables/OrdersTable/OrdersTable';
import s from './Orders.module.scss';

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
      <section className={s.search}>
        <Search placeholder={'User Name'} />
      </section>
      <section className={s.table}>
        <TableContainer title="All orders">
          {isLoading && !error ? (
            <i>Loading...</i>
          ) : (
            <OrdersTable ordersData={orders} />
          )}
        </TableContainer>
      </section>
      <section className={s.pagination}>
        <button
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={() => handlePageChange(page + 1)}>Next</button>
      </section>
    </Container>
  );
};
