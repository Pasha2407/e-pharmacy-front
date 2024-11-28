import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";

import css from "./Login.module.css";
import { selectAuthError } from "../../redux/auth/authSelectors";
import { loginThunk } from "../../redux/auth/authServices";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(selectAuthError);

  const [buttonClick, setButtonClick] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values, { setSubmitting }) => {
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => {
        navigate("/admin/dashboard");
      })
      .catch((error) => {
        console.error("Login failed:", error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className={css.Container}>
      <header>
        <h1>E-Pharmacy</h1>
      </header>
      <main>
        <section className={css.WelcomeHeader}>
          <p>
            Your medication, delivered Say goodbye to all
            <span> your healthcare </span>
            worries with us
          </p>
        </section>
        <section className={css.LoginForm}>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
              <Form className={css.Form}>
                <Field
                  className={css.FormLabel}
                  name="email"
                  type="email"
                  placeholder="Email address"
                />
                <Field
                  className={css.FormLabel}
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
                  <div className={css.Error}>
                    <p>Error Log in!</p>
                    <small>Maybe wrong password or email</small>
                  </div>
                )}
                <NavLink to="/admin/dashboard">Log in as a guest</NavLink>
              </Form>
            )}
          </Formik>
        </section>
      </main>
    </div>
  );
};
