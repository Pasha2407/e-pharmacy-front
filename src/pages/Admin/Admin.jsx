import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import css from "./Admin.module.css";
import { currentThunk, logoutThunk } from "../../redux/auth/authServices";
import { selectUserData } from "../../redux/auth/authSelectors";

export const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(selectUserData);

  useEffect(() => {
    dispatch(currentThunk());
  }, [dispatch]);

  const onLogout = () => {
    dispatch(logoutThunk());
    navigate("/login");
  };

  return (
    <div className={css.Container}>
      <header>
        <section className={css.Logo}></section>
        <section className={css.HeaderTitle}>
          <div>
            <h1>Medicine store</h1>
            <span>Dashboard | {userData?.email || "Guest"}</span>
          </div>
        </section>
        <section className={css.Logout}>
          <button onClick={onLogout}>Logout</button>
        </section>
      </header>
      <main>
        <aside></aside>
      </main>
    </div>
  );
};
