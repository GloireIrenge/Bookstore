import React from 'react';

// Redux functions
import { useDispatch } from 'react-redux';

import store from '../reducers/configureStore';

import { removeBook } from '../reducers/books/books';

// Style sheets
import style from './css/BookItem.module.css';

const BookItem = (props) => {
  const book = props;
  const { title, author, id } = book;

  const dispatch = useDispatch();
  const { books } = store.getState();

  const getBook = (e) => {
    e.preventDefault();
    const bk = books.filter((bk) => bk.id === e.target.id);
    dispatch(removeBook(bk[0]));
  };

  return (
    <li className={style.BookContainer}>
      <div className={style.BookInfo}>
        <p className={style.BookGenre}>Action</p>
        <p className={style.BookTitle}>{title}</p>
        <p className={style.BookAuthor}>{author}</p>
        <ul>
          <li><a href="./">Comments</a></li>
          <li><a id={id} onClick={getBook} href="./">Remove</a></li>
          <li><a href="./">Edit</a></li>
        </ul>
      </div>
      <div className={style.BookProgress}>
        <div className={style.Oval} />
        <h3>64%</h3>
        <p>completed</p>
      </div>
    </li>
  );
};

export default BookItem;