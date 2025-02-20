import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectGetProducts,
  selectProductsError,
  selectProductsIsLoading,
  selectProductsPage,
  selectProductName,
} from '../../redux/products/productsSelectors';

import { productsThunk } from '../../redux/products/productsServices';
import { setPage } from '../../redux/products/productsSlice';

import { Container } from 'components/Container/Container';
import { TableContainer } from 'components/TableContainer/TableContainer';
import { Table } from 'components/Table/Table';
import titles from 'shared/data/productTitles.json';

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectGetProducts);
  const isLoading = useSelector(selectProductsIsLoading);
  const error = useSelector(selectProductsError);
  const page = useSelector(selectProductsPage);
  const productName = useSelector(selectProductName);

  useEffect(() => {
    dispatch(productsThunk({ productName, page }));
  }, [productName, page, dispatch]);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return (
    <Container>
      <TableContainer title="All products">
        {isLoading && !error ? (
          <i>Loading...</i>
        ) : (
          <Table columns={titles.columns} data={products} />
        )}
      </TableContainer>
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
