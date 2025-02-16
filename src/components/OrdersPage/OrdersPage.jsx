import { Container } from '../Container/Container';
import { Filter } from '../Filter/Filter';
import { OrdersTable } from '../Tables/OrdersTable/OrdersTable';

export const OrdersPage = ({
  orders,
  isLoading,
  error,
  page,
  handlePageChange,
}) => {
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
