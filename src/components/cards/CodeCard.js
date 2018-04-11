// @flow

import React from 'react';
import { Text } from 'gestalt';
import highlightjs from 'highlight.js';
import stripIndent from '../../lib/strip';
import 'highlight.js/styles/atom-one-dark.css';

type Props = {|
  code: string,
  language: string,
|};

function CodeCard({ code, language }: Props) {
  const highlight = highlightjs.highlight(language, stripIndent(code)).value;
  const html = `<pre><code class="hljs ${language}">${highlight}</code></pre>`;

  return (
    <Text leading="tall">
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Text>
  );
}

export default CodeCard;
