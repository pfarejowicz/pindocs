// @flow

import * as React from 'react';
import Page from '../../components/Page';
import image1 from './images/image1.png';
import * as Cards from '../../lib/cards';

const cards = [
  Cards.createTitleCard(
    'Setting Up Your Laptop',
    'This guide is a walkthrough of how to get access to our codebase on your laptop. ' +
      'It will guide you through all the steps needed before you can start writing your ' +
      'first pull requests.'
  ),
  Cards.createHeaderCard('Getting Phabricator Access', 1),
  Cards.createTextCard(
    'Phabricator is home to all of our repositories, code reviews, and has many more in-depth ' +
      'features that can be customized to make your life easier. All engineers will need access ' +
      'to it in order to get code into production.'
  ),
  Cards.createImageCard(
    image1,
    'The homepage of our Pinterest Phabricator site'
  ),
  Cards.createCodeCard('ssh-keygen -t rsa -b 4096', 'javascript'),
];

export default () => <Page cards={cards} />;
