// @flow

import React from 'react';
import { Box, Column } from 'gestalt';
import Navigation from './components/Navigation';
import Main from './components/Main';
import 'gestalt/dist/gestalt.css';

function App() {
  return (
    <Box mdDisplay="flex" direction="row" minHeight="100vh">
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
