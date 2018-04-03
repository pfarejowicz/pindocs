// @flow

import React from 'react';
import { Box, Divider, Heading, Text } from 'gestalt';

type Props = {|
  title: string,
  description: string,
|};

function TitleCard({ description, title }: Props) {
  return (
    <Box>
      <Box marginBottom={4}>
        <Heading size="lg">{title}</Heading>
      </Box>
      <Box marginBottom={4}>
        <Text>{description}</Text>
      </Box>
      <Divider />
    </Box>
  );
}

export default TitleCard;
