// @flow

import type { Page } from './lib/types';

const routes: { [route: string]: Page } = {};

// $FlowFixMe: Flow doesn't know abou webpack import method
const requireCard = require.context('./pages', true, /\.js$/);
const paths = requireCard.keys();
paths.sort((a, b) => a.localeCompare(b));
paths.forEach(path => {
  const pathname = path.match(/([^/]+)\.js$/)[1];
  routes[pathname] = requireCard(path).default;
});

export default routes;
