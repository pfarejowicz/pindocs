// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../routes';
import { createPage } from '../lib/cards';

function Main() {
  return (
    <Switch>
      {Object.keys(routes).map((route: string) => (
        <Route
          component={createPage(routes[route])}
          path={`/${routes[route].path}`}
          key={route}
        />
      ))}
    </Switch>
  );
}

export default Main;
