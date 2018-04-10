// @flow

type CodeCard = {|
  type: 'code',
  code: string,
  language?: string,
|};

type HeaderCard = {|
  type: 'heading',
  heading: string,
  level: 1 | 2 | 3,
|};

type ImageCard = {|
  type: 'image',
  image: string,
  caption?: string,
|};

type TextCard = {|
  type: 'text',
  text: string,
|};

type TitleCard = {|
  type: 'title',
  title: string,
  description: string,
|};

export type Card = CodeCard | HeaderCard | ImageCard | TextCard | TitleCard;

export type Page = {|
  name: string,
  path: string,
  cards: Array<Card>,
|};
