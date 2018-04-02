// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../routes';

function Main() {
  return (
    <Switch>
      {Object.keys(routes).map((pathname: string) => (
        <Route
          component={routes[pathname]}
          path={`/${pathname}`}
          key={pathname}
        />
      ))}
    </Switch>
  );
}

export default Main;
