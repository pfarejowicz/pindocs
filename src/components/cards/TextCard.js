// @flow

import React from 'react';
import { Text } from 'gestalt';

type Props = {|
  text: string,
|};

function TextCard({ text }: Props) {
  return <Text>{text}</Text>;
}

export default TextCard;
