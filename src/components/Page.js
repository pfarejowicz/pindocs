// @flow

import * as React from 'react';
import { Box, Container } from 'gestalt';

type Props = {|
  cards: Array<React.Node>,
|};

function Page({ cards }: Props) {
  return (
    <Container>
      {cards.map((card, index) => (
        <Box marginBottom={4} id={`card-${index}`} key={index}>
          {card}
        </Box>
      ))}
    </Container>
  );
}

export default Page;
