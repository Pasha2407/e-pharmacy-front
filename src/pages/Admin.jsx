import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { currentThunk, logoutThunk } from "../redux/auth/authServices";
import { selectUserData } from "../redux/auth/authSelectors";
import { AdminPage } from "../components/AdminPage/AdminPage";

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

  return <AdminPage userData={userData} onLogout={onLogout} />;
};
