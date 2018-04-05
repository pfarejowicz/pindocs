// @flow

import React from 'react';
import { Text, Box, SelectList, Icon, Heading } from 'gestalt';
import { Link, withRouter } from 'react-router-dom';
import routes from '../routes';

type Props = {|
  history: *,
  location: *,
|};

const pages = Object.keys(routes);
const options = [{ label: '-', value: '/' }].concat(
  pages.map(page => ({
    label: routes[page].name,
    value: `/${routes[page].path}`,
  }))
);

function Navigation({ history, location }: Props) {
  const links = pages.map(page => (
    <Text bold leading="tall" color="darkGray" size="lg">
      <Link to={`/${routes[page].path}`}>{routes[page].name}</Link>
    </Text>
  ));

  return (
    <Box>
      <Box mdDisplay="none" flex="grow">
        <SelectList
          id="nav"
          onChange={({ value }) => history.push(value)}
          options={options}
          value={location.pathname || '/'}
        />
      </Box>
      <Box display="none" mdDisplay="flex" direction="column" flex="grow">
        <Box
          marginBottom={4}
          display="flex"
          direction="row"
          alignItems="center"
          marginLeft={-1}
          marginRight={-1}
        >
          <Box paddingX={1}>
            <Icon
              icon="pinterest"
              color="red"
              size={24}
              accessibilityLabel="Pinterest Logo"
            />
          </Box>
          <Box paddingX={1}>
            <Heading size="xs">Docs</Heading>
          </Box>
        </Box>
        <Box role="list">
          {links.map((link, index) => (
            <Box role="listitem" key={index}>
              {link}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default withRouter(Navigation);
