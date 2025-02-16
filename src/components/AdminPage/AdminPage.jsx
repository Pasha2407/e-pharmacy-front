import { Outlet } from "react-router-dom";

import { AdminSidebar } from "../AdminSidebar/AdminSidebar";
import { AdminHeader } from "../AdminHeader/AdminHeader";
import s from "./AdminPage.module.scss";

export const AdminPage = ({ userData, onLogout }) => {
  return (
    <div className={s.container}>
      <AdminHeader userData={userData} onLogout={onLogout} />
      <main>
        <AdminSidebar />
        <Outlet />
      </main>
    </div>
  );
};
