import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import LandingHome from './components/layout/LandingHome';

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
      </div>
    </Router>
  );
}

export default App;
