// @flow

import React from 'react';
import { Box, Column } from 'gestalt';
import Navigation from './Navigation';
import Main from './Main';
import 'gestalt/dist/gestalt.css';

function App() {
  return (
    <Box mdDisplay="flex" direction="row" height="100vh">
      <Column span={12} mdSpan={3}>
        <Box padding={4}>
          <Navigation />
        </Box>
      </Column>
      <Column span={12} mdSpan={9}>
        <Box padding={4}>
          <Main />
        </Box>
      </Column>
    </Box>
  );
}

export default App;
