import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';
import { Login } from 'pages/Login/Login';
import { Admin } from 'pages/Admin/Admin';
import { Dashboard } from 'pages/Dashboard/Dashboard';
import { Orders } from 'pages/Orders/Orders';
import { Products } from 'pages/Products/Products';
import { Suppliers } from 'pages/Suppliers/Suppliers';
import { Customers } from 'pages/Customers/Customers';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/login" replace />} />
        <Route path="login" element={<Login />} />
        <Route path="admin" element={<Admin />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
          <Route path="suppliers" element={<Suppliers />} />
          <Route path="customers" element={<Customers />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>
    </Routes>
  );
};
