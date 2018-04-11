// @flow

import type { Page } from '../lib/types';
import image1 from '../images/vscode_1.png';
import image2 from '../images/vscode_2.png';
import image3 from '../images/vscode_3.png';
import image4 from '../images/vscode_4.png';
import image5 from '../images/vscode_5.png';

const page: Page = {
  name: 'Setting Up VSCode',
  path: 'vscode',
  cards: [
    {
      type: 'title',
      title: 'Setting Up VSCode',
      description: `
        A powerful editor increases developer velocity and works well with the technologies and frameworks
        that we use in our codebase. Pinterest gives you the freedom to work in any IDE so this guide is
        only a starting point for gaining all the support you’ll need for the tools we use.`,
    },
    {
      type: 'heading',
      heading: 'Installing VScode',
      level: 1,
    },
    {
      type: 'text',
      text: `
        [VSCode](https://code.visualstudio.com/) is an extensible text editor created by Microsoft with
        great support for all of the plugins and features we need for a React project.`,
    },
    {
      type: 'image',
      image: image1,
      caption:
        'A VSCode editor window open with all features in this tutorial enabled',
    },
    {
      type: 'text',
      text: `
        Install the application by visiting the VSCode website and clicking download, follow your
        computer’s instructions to complete the process and you’re good to go.`,
    },
    {
      type: 'heading',
      heading: 'Adding Flow Support',
      level: 1,
    },
    {
      type: 'text',
      text: `
        [Flow](https://flow.org/) is a type checker that helps identify problems as you code. It makes
        inferences based on our codebase to provide realtime feedback right in the editor or command line.`,
    },
    {
      type: 'text',
      text: `
        Support for Flow in VSCode comes through the
        [Flow Language](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode) package.`,
    },
    {
      type: 'text',
      text: `
        1. Open VSCode.
        2. Choose **Extensions** from the side menu bar to bring up the **Marketplace**.
        3. In the search box, type “flow” and press the Enter key.
        4. Click the **Install** button.`,
    },
    {
      type: 'image',
      image: image2,
      caption: 'The flow package we will be installing',
    },
    {
      type: 'text',
      text: `
        Once the installation completes, you will want to disable the TypeScript built-in extension in
        VSCode as this will conflict with the type checking done by Flow. In the extensions panel on the
        left, find the … button. Click to open the menu and select “Show Built-in Extensions”. In the search
        box, type “typescript” and press the Enter key. Find the TypeScript language features and click
        **Disable**.`,
    },
    {
      type: 'image',
      image: image3,
      caption:
        'Disable TypeScript language features from this built-in package',
    },
    {
      type: 'text',
      text: `
        All that is left to do now is specifying the specific configuration we need for Flow support.
        Access this through Code → Preferences → Settings from the menu bar at the top. This will bring
        up the user settings panel. Here you can add the following custom settings on the right side.`,
    },
    {
      type: 'code',
      code: `
        {
          "flow.pathToFlow": "/Users/<USERNAME>/code/pinboard/webapp/node_modules/.bin/flow",
          "flow.useNPMPackagedFlow": true,
        }
      `,
      language: 'json',
    },
    {
      type: 'text',
      text: `
        You must reload VS Code after installing this extension for these settings to take affect.`,
    },
    {
      type: 'heading',
      heading: 'Adding ESLint Support',
      level: 1,
    },
    {
      type: 'text',
      text: `
        [ESLint](https://eslint.org/) is our plugin of choice for Javascript and JSX file linting. It comes
        with a bunch of default rules and supports the custom in-house rules we have as well.`,
    },
    {
      type: 'text',
      text: `
        Support for ESLint in VSCode comes through the
        [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) package.`,
    },
    {
      type: 'text',
      text: `
        1. Open VSCode.
        2. Choose **Extensions** from the side menu bar to bring up the **Marketplace**.
        3. In the search box, type “eslint” and press the Enter key.
        4. Click the **Install** button.`,
    },
    {
      type: 'image',
      image: image4,
      caption: 'The ESLint package we will be installing',
    },
    {
      type: 'heading',
      heading: 'Adding Prettier Support',
      level: 1,
    },
    {
      type: 'text',
      text: `
        [Prettier](https://prettier.io/) is the code formatting tool we use here at Pinterest for web
        development. It saves time and energy in code reviews by enforcing an agreed upon common style`,
    },
    {
      type: 'text',
      text: `
        Support for Prettier in VSCode comes through the
        [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) package.`,
    },
    {
      type: 'text',
      text: `
        1. Open VSCode.
        2. Choose **Extensions** from the side menu bar to bring up the **Marketplace**.
        3. In the search box, type “prettier” and press the Enter key.
        4. Click the **Install** button.`,
    },
    {
      type: 'image',
      image: image5,
      caption: 'The Prettier package we will be installing',
    },
  ],
};

export default page;
