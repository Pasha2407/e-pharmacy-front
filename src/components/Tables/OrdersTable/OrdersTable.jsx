import s from './OrdersTable.module.scss';

export const OrdersTable = ({ ordersData }) => {
  return (
    <table className={s.table}>
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
  );
};
