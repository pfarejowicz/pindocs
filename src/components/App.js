// @flow

import React from 'react';
import { Box } from 'gestalt';
import Navigation from './Navigation';
import Main from './Main';
import 'gestalt/dist/gestalt.css';

function App() {
  return (
    <Box mdDisplay="flex" direction="row" height="100vh">
      <Box column={12} mdColumn={3} overflow="auto">
        <Box padding={4}>
          <Navigation />
        </Box>
      </Box>
      <Box column={12} mdColumn={9} overflow="auto">
        <Box padding={4}>
          <Main />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
