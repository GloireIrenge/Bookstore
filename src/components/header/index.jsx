import React from 'react';
import { NavLink } from 'react-router-dom';
/* eslint-disable jsx-quotes */
const header = () => (
  <header className='h-20 flex justify-between bg-slate-500 text-slate-500 px-5 items-center header'>
    <nav className='w-1/4'>
      <ul className='flex justify-between'>
        <li>
          <NavLink to='/'>BookStore CMS</NavLink>
        </li>
        <li>
          <NavLink to='/'>Books</NavLink>
        </li>
        <li>
          <NavLink to='/categories'>Categories</NavLink>
        </li>
      </ul>
    </nav>
    <span>Logo</span>
  </header>
);

export default header;
