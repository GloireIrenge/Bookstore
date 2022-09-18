/* eslint-disable jsx-quotes */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Categories, Books, NotFound } from './components';

const App = () => (
  <>
    <Router>
      <Routes>
        <Route path='/' index element={<Books />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  </>
);

export default App;
