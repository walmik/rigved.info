import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Portfolio from './Portfolio';
import Item from './PortfolioItem';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/item/:id" element={<Item />} />
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}
