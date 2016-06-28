import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from './containers/App';
import About from './containers/About';
import NotFound from './containers/NotFound';

export default function createRoutes() {
  return (
    <Route path="/" component={App}>
      <IndexRedirect to="about" />
      <Route path="about" component={About} />

      <Route path="*" component={NotFound} />
    </Route>
  );
}
