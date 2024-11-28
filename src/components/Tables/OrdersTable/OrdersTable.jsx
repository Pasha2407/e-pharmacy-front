import React from "react";
import css from "./OrdersTable.module.css";

export const OrdersTable = ({ ordersData }) => {
  return (
    <div className={css.Container}>
      <header>
        <h1>All orders</h1>
      </header>
      <table className={css.Table}>
        <thead>
          <tr>
            <th>User info</th>
            <th>Address</th>
            <th>Products</th>
            <th>Order date</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {ordersData?.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.products}</td>
              <td>{item.order_date}</td>
              <td>{item.price}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
