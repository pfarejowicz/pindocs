// @flow

import React from 'react';
import { Text } from 'gestalt';
import marked from 'marked';
import stripIndent from '../../lib/strip';

type Props = {|
  text: string,
|};

function TextCard({ text }: Props) {
  const html = marked(stripIndent(text));
  return (
    <Text leading="tall">
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Text>
  );
}

export default TextCard;
