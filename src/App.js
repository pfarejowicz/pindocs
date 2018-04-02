// @flow

import React from 'react';
import { Box, Column } from 'gestalt';
import Navigation from './components/Navigation';
import Main from './components/Main';

function App() {
  return (
    <Box mdDisplay="flex" direction="row" minHeight="100vh">
      <Column span={12} mdSpan={2}>
        <Box padding={4}>
          <Navigation />
        </Box>
      </Column>
      <Column span={12} mdSpan={10}>
        <Box padding={4}>
          <Main />
        </Box>
      </Column>
    </Box>
  );
}

export default App;
