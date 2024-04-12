import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import LandingHome from './components/layout/LandingHome';
import Products from './components/layout/Products';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <hr />
        <LandingHome />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* Define other routes here */}
        </Routes>
        <Products /> 
      </div>
    </Router>
  );
}

export default App;
