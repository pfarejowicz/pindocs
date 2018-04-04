// @flow

import React from 'react';
import { Text } from 'gestalt';
import highlightjs from 'highlight.js';

type Props = {|
  code: string,
  language: string,
|};

function CodeCard({ code, language }: Props) {
  const highlight = highlightjs.highlight(language, code).value;
  const html = `<pre><code class="hljs ${language}">${highlight}</code></pre>`;

  return (
    <Text leading="tall">
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Text>
  );
}

export default CodeCard;
