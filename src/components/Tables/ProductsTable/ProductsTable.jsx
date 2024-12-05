import React from "react";
import css from "./ProductsTable.module.css";

export const ProductsTable = ({ productsData }) => {
  return (
    <div className={css.Container}>
      <header>
        <h1>All products</h1>
      </header>
      <table className={css.Table}>
        <thead>
          <tr>
            <th>Product info</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Suppliers</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productsData?.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.stock}</td>
              <td>{item.suppliers}</td>
              <td>{item.price}</td>
              <td>none</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
