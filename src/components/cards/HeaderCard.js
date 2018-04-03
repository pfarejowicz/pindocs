// @flow

import React from 'react';
import { Heading } from 'gestalt';

type Props = {|
  size: 'xs' | 'sm' | 'md',
  text: string,
|};

function HeaderCard({ size, text }: Props) {
  return <Heading size={size}>{text}</Heading>;
}

export default HeaderCard;
