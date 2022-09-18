/* eslint-disable jsx-quotes */
import React from 'react';
import Header from '../header';

const index = () => (
  <>
    <Header />
    <div className='flex justify-start items-center ml-5 gap-x-4'>
      <input type='checkbox' id='status' value='status' />
      <h1>Check status</h1>
    </div>
  </>
);

export default index;
