/* eslint-disable jsx-quotes */
import React from 'react';

const book = () => (
  <div className='flex'>
    <form>
      <input
        type='text'
        placeholder='Book title'
        required
        className='w-48 border-2'
      />
      <select name='category' id='category' className='w-48'>
        <option value=''>Category</option>
        <option value=''>Category 1</option>
        <option value=''>Category 2</option>
      </select>
      <input type='submit' value='Add book' className='w-48' />
    </form>
  </div>
);

export default book;
