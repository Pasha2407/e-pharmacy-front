import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';

import { selectUserData } from '../../redux/auth/authSelectors';
import { currentThunk, logoutThunk } from '../../redux/auth/authServices';

import { AdminSidebar } from 'components/AdminSidebar/AdminSidebar';
import { AdminHeader } from 'components/AdminHeader/AdminHeader';
import s from './Admin.module.scss';

export const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(selectUserData);

  useEffect(() => {
    dispatch(currentThunk());
  }, [dispatch]);

  const onLogout = () => {
    dispatch(logoutThunk());
    navigate('/login');
  };

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
