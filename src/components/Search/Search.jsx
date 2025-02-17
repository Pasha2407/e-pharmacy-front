import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setUserName } from '../../redux/orders/ordersSlice';

import s from './Search.module.scss';

export const Search = ({ placeholder }) => {
  const dispatch = useDispatch();
  const [startSearch, setStartSearch] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const search = form.elements.search;
    dispatch(setUserName({ userName: search.value }));
    setStartSearch(true);
  };

  const handleClear = (event) => {
    const form = event.currentTarget.closest('form');
    form.reset();
    dispatch(setUserName({ userName: '' }));
    setStartSearch(false);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input name="search" type="text" placeholder={placeholder}></input>
      <button className={s.searchButton} type="submit">
        Search
      </button>
      {startSearch && (
        <button type="button" onClick={handleClear} className={s.clear}>
          Clear
        </button>
      )}
    </form>
  );
};
