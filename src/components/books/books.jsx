/* eslint-disable jsx-quotes */
import React from 'react';
import Form from './form';
import Book from './book';
import Header from '../header';

const books = () => (
  <div className='main'>
    <Header />
    <Book />
    <Form />
  </div>
);

export default books;
