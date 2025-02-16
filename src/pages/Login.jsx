import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectAuthError } from '../redux/auth/authSelectors';
import { loginThunk } from '../redux/auth/authServices';
import { LoginPage } from '../components/LoginPage/LoginPage';

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

  return <LoginPage onSubmit={onSubmit} error={error} />;
};
