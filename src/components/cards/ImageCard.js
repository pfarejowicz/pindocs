// @flow

import React from 'react';
import { Box, Text } from 'gestalt';

type Props = {|
  caption?: string,
  image: string,
|};

function ImageCard({ caption, image }: Props) {
  return (
    <Box>
      <img alt="" style={{ width: '100%' }} src={image} />
      {caption && (
        <Box display="flex" alignItems="center" justifyContent="center">
          <Text align="center">{caption}</Text>
        </Box>
      )}
    </Box>
  );
}

export default ImageCard;
