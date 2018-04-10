// @flow

import React from 'react';
import { Text, Box, Link, SelectList, Icon, Heading } from 'gestalt';
import { withRouter } from 'react-router-dom';
import routes from '../routes';

type Props = {|
  history: *,
  location: *,
|};

const pages = Object.keys(routes).map(route => routes[route]);
const options = [{ label: '-', value: '/' }].concat(
  pages.map(page => ({
    label: page.name,
    value: `/${page.path}`,
  }))
);

const isLeftClickEvent = event => event.button === 0;
const isModifiedEvent = event =>
  !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

function Navigation({ history, location }: Props) {
  const links = pages.map(page => {
    const href = `/${page.path}`;
    const handleClick = ({ event }) => {
      if (event.defaultPrevented) return;
      if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;
      event.preventDefault();
      history.push(href);
    };
    return (
      <Text bold leading="tall" color="darkGray" size="lg">
        <Link href={href} onClick={handleClick}>
          {page.name}
        </Link>
      </Text>
    );
  });

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
