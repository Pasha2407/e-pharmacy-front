import { Container } from '../Container/Container';
import { ProductsTable } from '../Tables/ProductsTable/ProductsTable';

export const ProductsPage = ({
  products,
  isLoading,
  error,
  page,
  handlePageChange,
}) => {
  return (
    <Container>
      {isLoading && !error ? (
        <i>Loading...</i>
      ) : (
        <ProductsTable productsData={products} />
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
