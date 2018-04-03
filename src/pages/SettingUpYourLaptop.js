// @flow

import * as React from 'react';
import HeaderCard from '../components/cards/HeaderCard';
import TitleCard from '../components/cards/TitleCard';
import Page from '../components/Page';

const cards = [];
const card = c => cards.push(c);

card(
  <TitleCard
    title="Setting Up Your Laptop"
    description={
      'This guide is a walkthrough of how to get access to our codebase on your laptop. ' +
      'It will guide you through all the steps needed before you can start writing your ' +
      'first pull requests.'
    }
  />
);

card(<HeaderCard text="Getting Phabricator Access" size="md" />);

export default () => <Page cards={cards} />;
