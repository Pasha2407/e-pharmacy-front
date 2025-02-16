import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Field, Formik, Form } from 'formik';

import s from './LoginForm.module.scss';

export const LoginForm = ({ onSubmit, error }) => {
  const [buttonClick, setButtonClick] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <div className={s.loginForm}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form className={s.form}>
            <Field
              className={s.formLabel}
              name="email"
              type="email"
              placeholder="Email address"
            />
            <Field
              className={s.formLabel}
              name="password"
              type="password"
              placeholder="Password"
            />
            <button
              onClick={() => setButtonClick(true)}
              type="submit"
              disabled={isSubmitting}
            >
              Log in
            </button>
            {buttonClick && error && (
              <div className={s.error}>
                <p>Error Log in!</p>
                <small>Maybe wrong password or email</small>
              </div>
            )}
            <NavLink to="/admin">Log in as a guest</NavLink>
          </Form>
        )}
      </Formik>
    </div>
  );
};
