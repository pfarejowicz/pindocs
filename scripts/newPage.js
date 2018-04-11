#!/usr/bin/env node
/* eslint import/no-dynamic-require: 0, no-console: 0 */
const path = require('path');
const shell = require('shelljs');

const template = `
// @flow

import type { Page } from '../lib/types';

const page: Page = {
  name: '<REPLACE WITH PAGE NAME>',
  path: '<REPLACE WITH PATH NAME>',
  cards: [
    {
      type: 'title',
      title: '<PAGE TITLE>',
      description: '<PAGE DESCRIPTION>',
    },
    // Add more cards to the list here
  ],
};

export default page;
`;

if (!process.argv[2]) {
  console.log(
    'No file name provided - please specify a file name as the first argument'
  );
} else {
  console.log(`Setting up new file: ${process.argv[2]}`);
  shell.cd(path.join(__dirname, '..', 'src', 'pages'));
  shell.ShellString(template.trim()).to(`${process.argv[2]}`);
}
