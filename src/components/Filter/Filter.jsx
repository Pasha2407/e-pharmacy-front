import React, { useState } from "react";
import css from "./Filter.module.css";
import { useDispatch } from "react-redux";
import { setUserName } from "../../redux/orders/ordersSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  const [filterOn, setFilterOn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const filter = form.elements.filter;
    dispatch(setUserName({ userName: filter.value }));
    setFilterOn(true);
  };

  const handleClear = (event) => {
    const form = event.currentTarget.closest("form");
    form.reset();
    dispatch(setUserName({ userName: "" }));
    setFilterOn(false);
  };

  return (
    <form className={css.Container} onSubmit={handleSubmit}>
      <input name="filter" type="text" placeholder="User Name"></input>
      <button className={css.Filter} type="submit">
        Filter
      </button>
      {filterOn && (
        <button type="button" onClick={handleClear} className={css.Clear}>
          Clear
        </button>
      )}
    </form>
  );
};
