// @flow

import type { Page } from '../lib/types';
import image1 from '../images/browser_1.png';
import image2 from '../images/browser_2.png';
import image3 from '../images/browser_3.png';
import image4 from '../images/browser_4.png';

const page: Page = {
  name: 'Setting Up Your Browser',
  path: 'browser',
  cards: [
    {
      type: 'title',
      title: 'Setting Up Your Browser',
      description: `
        As a web developer, your browser is your first line of attack against debugging problems in your code.
        A strong set of developer tools aimed at providing more transparency can make this process more efficient.
        This guide outlines a few tools that will make your life easier.`,
    },
    {
      type: 'heading',
      heading: 'Installing Chrome',
      level: 1,
    },
    {
      type: 'text',
      text: `
        To test any new feature you develop for the web platform, you have the freedom to select any browser
        of your choice, however, we recommend using Google Chrome for the extensible support it provides.
        Chrome comes with built in developer tools for debugging and providing access into the internals of
        the browser.`,
    },
    {
      type: 'image',
      image: image1,
    },
    {
      type: 'text',
      text: `
        Pinterest IT pre-installs the latest version of Chrome when you first receive your laptop. If you’re
        missing it for any reason, simply head over to the [Chrome](https://www.google.com/chrome/) website to
        re-download the browser.`,
    },
    {
      type: 'heading',
      heading: 'Installing React Developer Tools',
      level: 1,
    },
    {
      type: 'text',
      text: `
        [React Developer Tools](https://github.com/facebook/react-devtools) is an extension for Chrome provided
        by the creators of React that lets you inspect the React component hierarchy, including component props
        and state, right in the browser.`,
    },
    {
      type: 'image',
      image: image2,
    },
    {
      type: 'text',
      text: `
        To add the React DevTools extension to your browser, head over to the
        [Chrome web store](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
        and click the **Add to Chrome** button in the upper right.`,
    },
    {
      type: 'heading',
      heading: 'Installing Redux Developer Tools',
      level: 1,
    },
    {
      type: 'text',
      text: `
        [Redux Developer Tools](http://extension.remotedev.io/) is an extension for Chrome that helps
        improve the Redux development workflow by allowing you to debug application state changes.`,
    },
    {
      type: 'image',
      image: image3,
    },
    {
      type: 'text',
      text: `
        To add the Redux DevTools extension to your browser, head over to the
        [Chrome web store](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
        and click the **Add to Chrome** button in the upper right.`,
    },
    {
      type: 'heading',
      heading: 'Installing A Cookie Editor',
      level: 1,
    },
    {
      type: 'text',
      text: `
        Occasionally, you will run into a scenario where you will need access into the browser’s cookies to
        debug or edit. Though this is a less frequent scenario for most web developers, a good extension to
        keep that supports this ability is [EditThisCookie](http://www.editthiscookie.com/).`,
    },
    {
      type: 'image',
      image: image4,
    },
    {
      type: 'text',
      text: `
        To add EditThisCookie to your browser, head over to the
        [Chrome web store](https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg)
        and click the **Add to Chrome** button in the upper right.`,
    },
    {
      type: 'heading',
      heading: 'Installing A Request Editor',
      level: 1,
    },
    {
      type: 'text',
      text: `
        Likewise, you may run into a scenario where you will need to manually add or modify the HTTP request
        headers. The most common use case for this is Pinterest experiment overrides. A good approach for
        this is using the ModHeaders extension.`,
    },
    {
      type: 'text',
      text: `
        To add the ModHeader extension to your browser, head over to the
        [Chrome web store](https://chrome.google.com/webstore/detail/modheader/idgpnmonknjnojddfkpgkljpfnnfcklj)
        and click the **Add to Chrome** button in the upper right.`,
    },
  ],
};

export default page;
