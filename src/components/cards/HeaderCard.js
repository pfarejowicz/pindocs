// @flow

import React from 'react';
import { Heading } from 'gestalt';

type Props = {|
  level: 1 | 2 | 3,
  heading: string,
|};

function HeaderCard({ heading, level }: Props) {
  const size = (level === 1 && 'md') || (level === 2 && 'sm') || 'xs';
  return <Heading size={size}>{heading}</Heading>;
}

export default HeaderCard;
