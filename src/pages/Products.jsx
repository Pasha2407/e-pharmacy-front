import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectGetProducts,
  selectProductsError,
  selectProductsIsLoading,
  selectProductsPage,
  selectProductName,
} from '../redux/products/productsSelectors';

import { productsThunk } from '../redux/products/productsServices';
import { setPage } from '../redux/products/productsSlice';
import { ProductsPage } from '../components/ProductsPage/ProductsPage';

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
    <ProductsPage
      products={products}
      isLoading={isLoading}
      error={error}
      page={page}
      handlePageChange={handlePageChange}
    />
  );
};
