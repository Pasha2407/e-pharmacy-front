import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectAuthError } from '../../redux/auth/authSelectors';
import { loginThunk } from '../../redux/auth/authServices';

import { LoginForm } from 'components/LoginForm/LoginForm';
import s from './Login.module.scss';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(selectAuthError);

  const onSubmit = (values, { setSubmitting }) => {
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => {
        navigate('/admin/dashboard');
      })
      .catch((error) => {
        console.error('Login failed:', error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };
  return (
    <div className={s.container}>
      <header>
        <div className={s.logo}></div>
        <h1 className={s.title}>E-Pharmacy</h1>
      </header>
      <main>
        <div className={s.welcomeTitle}>
          <div className={s.image}></div>
          <p>
            Your medication, delivered Say goodbye to all
            <span> your healthcare </span>
            worries with us
          </p>
        </div>
        <LoginForm onSubmit={onSubmit} error={error} />
      </main>
    </div>
  );
};
