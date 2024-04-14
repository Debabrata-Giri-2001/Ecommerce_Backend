import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/common/Home';
import ProductDetails from '../pages/common/ProductDetails';

const PrivateRt = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
    </Router>
  )
}

export default PrivateRt
