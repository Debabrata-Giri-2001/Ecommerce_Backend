import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/common/Home';
import ProductDetails from '../pages/common/ProductDetails';
import ProductsAll from '../pages/common/ProductsAll';

const PrivateRt = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/products' element={<ProductsAll />} />
      </Routes>
    </Router>
  )
}

export default PrivateRt
