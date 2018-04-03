// @flow

import React from 'react';
import { Heading } from 'gestalt';

type Props = {|
  caption?: string,
  image: string,
|};

function ImageCard({ caption, image }: Props) {
  return <Heading size={image}>{caption}</Heading>;
}

export default ImageCard;
