import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import About from './containers/About';
import NotFound from './containers/NotFound';

export default function createRoutes() {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="*" component={NotFound} />
    </Route>
  );
}
