const routes = {};

const requireCard = require.context('./pages', true, /\.js$/);
const paths = requireCard.keys();
paths.sort((a, b) => a.localeCompare(b));
paths.forEach(path => {
  const pathname = path.match(/([^/]+)\.js$/)[1];
  routes[pathname] = requireCard(path).default;
});

export default routes;
