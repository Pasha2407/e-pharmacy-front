import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

import css from "./Admin.module.css";
import { currentThunk, logoutThunk } from "../../redux/auth/authServices";
import { selectUserData } from "../../redux/auth/authSelectors";

export const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const userData = useSelector(selectUserData);

  useEffect(() => {
    dispatch(currentThunk());
  }, [dispatch]);

  const onLogout = () => {
    dispatch(logoutThunk());
    navigate("/login");
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/admin/dashboard":
        return "Dashboard";
      case "/admin/orders":
        return "All Orders";
      default:
        return "Dashboard";
    }
  };

  return (
    <div className={css.Container}>
      <header>
        <section className={css.Logo}></section>
        <section className={css.HeaderTitle}>
          <div>
            <h1>Medicine store</h1>
            <span>
              {getPageTitle()} | {userData?.email || "Guest"}
            </span>
          </div>
        </section>
        <section className={css.Logout}>
          <button onClick={onLogout}>Logout</button>
        </section>
      </header>
      <main>
        <aside>
          <NavLink to="dashboard">D</NavLink>
          <NavLink to="orders">AO</NavLink>
        </aside>
        <Outlet />
      </main>
    </div>
  );
};
