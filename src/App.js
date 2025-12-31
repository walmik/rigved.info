import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Portfolio from './Portfolio';
import Item from './PortfolioItem';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/item/:id" element={<Item />} />
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}
