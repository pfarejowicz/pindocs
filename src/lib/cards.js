// @flow

import React from 'react';
import CodeCard from '../components/cards/CodeCard';
import HeaderCard from '../components/cards/HeaderCard';
import ImageCard from '../components/cards/ImageCard';
import TextCard from '../components/cards/TextCard';
import TitleCard from '../components/cards/TitleCard';

export const createCodeCard = (code: string, language?: 'javascript') => (
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
