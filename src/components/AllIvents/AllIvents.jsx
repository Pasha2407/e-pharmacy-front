import React from "react";
import css from "./AllIvents.module.css";

export const AllIvents = () => {
  return (
    <div className={css.Container}>
      <section>
        <p className={css.Title}>All products</p>
        <p className={css.Count}>8,430</p>
      </section>
    </div>
  );
};
