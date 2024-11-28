import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "../Layout/Layout";
import { Login } from "../../pages/Login/Login";
import { Admin } from "../../pages/Admin/Admin";
import { Dashboard } from "../../pages/Dashboard/Dashboard";
import { Orders } from "../../pages/Orders/Orders";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="admin" element={<Admin />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
