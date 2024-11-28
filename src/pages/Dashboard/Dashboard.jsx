import React from "react";
import { AllIvents } from "../../components/AllIvents/AllIvents";
import css from "./Dashboard.module.css";

export const Dashboard = () => {
  return (
    <div className={css.Container}>
      <section className={css.Ivents}>
        <AllIvents />
        <AllIvents />
      </section>
    </div>
  );
};
