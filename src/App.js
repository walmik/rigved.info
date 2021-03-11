import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Portfolio from './Portfolio';
import Item from './PortfolioItem';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/item">
          <Item />
        </Route>
        <Route path="/">
          <Portfolio />
        </Route>
      </Switch>
    </Router>
  );
}
