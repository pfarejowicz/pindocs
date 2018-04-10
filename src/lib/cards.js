// @flow

import React from 'react';
import CodeCard from '../components/cards/CodeCard';
import HeaderCard from '../components/cards/HeaderCard';
import ImageCard from '../components/cards/ImageCard';
import TextCard from '../components/cards/TextCard';
import TitleCard from '../components/cards/TitleCard';
import Page from '../components/Page';
import type { Page as PageType } from './types';

export const createCodeCard = (code: string, language?: string) => (
  <CodeCard code={code} language={language || 'javascript'} />
);

export const createHeaderCard = (heading: string, level: 1 | 2 | 3) => (
  <HeaderCard heading={heading} level={level} />
);

export const createImageCard = (image: string, caption?: string) => (
  <ImageCard image={image} caption={caption} />
);

export const createTextCard = (text: string) => <TextCard text={text} />;

export const createTitleCard = (title: string, description: string) => (
  <TitleCard title={title} description={description} />
);

export const createPage = (page: PageType) => () => {
  const cards = page.cards.map(card => {
    switch (card.type) {
      case 'code':
        return createCodeCard(card.code, card.language);
      case 'heading':
        return createHeaderCard(card.heading, card.level);
      case 'image':
        return createImageCard(card.image, card.caption);
      case 'text':
        return createTextCard(card.text);
      case 'title':
        return createTitleCard(card.title, card.description);
      default:
        return null;
    }
  });
  return <Page cards={cards} />;
};
