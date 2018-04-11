// @flow

import type { Page } from '../lib/types';
import image1 from '../images/css_1.png';
import image2 from '../images/css_2.png';

const page: Page = {
  name: 'CSS',
  path: 'css',
  cards: [
    {
      type: 'title',
      title: 'CSS',
      description: `
        CSS at Pinterest has greatly evolved since our web app was first launched. To that effect, you’ll notice
        varying degrees of CSS usage scattered throughout the codebase. Since CSS stylesheets are a blocking
        network request, our goal is to make it as efficient as possible. This guide will outline best practices
        at Pinterest.`,
    },
    {
      type: 'heading',
      heading: 'Gestalt',
      level: 1,
    },
    {
      type: 'text',
      text: `
        [Gestalt](https://pinterest.github.io/gestalt/#/) is a set of React UI components that supports Pinterest’s
        [design](https://pinterest.github.io/pds/) language. It is an [open source](https://github.com/pinterest/gestalt)
        project hosted on GitHub and registered with [npm](https://www.npmjs.com/package/gestalt). Any engineer at
        Pinterest is welcome to contribute to the codebase.`,
    },
    {
      type: 'text',
      text: `
        For most design, style, and layout needs, Gestalt will cover 99% of use cases. This should be your
        first resource to check before looking for alternative solutions.`,
    },
    {
      type: 'heading',
      heading: 'Documentation',
      level: 2,
    },
    {
      type: 'text',
      text: `
        Every Gestalt component has matching, well-maintained [documentation](https://pinterest.github.io/gestalt/#/).
        For more information on anything, this is a good starting point.`,
    },
    {
      type: 'text',
      text: `
        Each page covers the basic developer API for a Gestalt component:
        - Props for the component
        - Required or optional
        - Flow typing
        - Default values`,
    },
    {
      type: 'text',
      text: `
        In addition to these, every component has live examples demonstrating how to use the component. These
        examples can be edited in realtime right on the page.`,
    },
    {
      type: 'image',
      image: image1,
    },
    {
      type: 'heading',
      heading: 'Playground',
      level: 2,
    },
    {
      type: 'text',
      text: `
        Building a new component with Gestalt is made easy with the [playground](https://codesandbox.io/s/k5plvp9v8v).
        Here you can directly work with all the Gestalt components to test out your new features. Changes are
        synced live and displayed in real time.`,
    },
    {
      type: 'image',
      image: image2,
    },
    {
      type: 'heading',
      heading: 'Usage',
      level: 2,
    },
    {
      type: 'text',
      text: `
        Using gestalt in pinboard is already preconfigured to work with no additional setup. Simply import the
        components you need and pass the props you want.`,
    },
    {
      type: 'code',
      code: `
        import { Box, Icon } from 'gestalt';

        function MyComponent(props: Props) {
          return (
            <Box color="white">
              <Icon icon="check" color="green" accessibilityLabel="Done" />
            </Box>
          );
        }
      `,
      language: 'javascript',
    },
    {
      type: 'heading',
      heading: 'Inline Styles',
      level: 1,
    },
    {
      type: 'text',
      text: `
        For cases not covered by Gestalt, inline styles right in the component are a good alternative. Use these
        sparingly though as they are slower to render. Support for inline styles is covered by using
        \`dangerouslySetInlineStyle\` on \`<Box />\`.`,
    },
    {
      type: 'heading',
      heading: 'Static Styles',
      level: 2,
    },
    {
      type: 'text',
      text: `
        Inline styles that stay consistent on every render should be defined outside of the component.
        Since the definition won’t change, we gain a slight increase in performance by defining the style
        outside the component scope.`,
    },
    {
      type: 'code',
      code: `
        import { Box } from 'gestalt';

        const style1 = { __style: { background: "#d13535" } };

        function MyComponent(props: Props) {
          return <Box dangerouslySetInlineStyle={style1} height={60} width={60} />;
        };
      `,
      language: 'javascript',
    },
    {
      type: 'heading',
      heading: 'Dynamic Styles',
      level: 2,
    },
    {
      type: 'text',
      text: `
        If your inline style changes dynamically based on the props and state of a component, then you will
        need to move the style declaration into the component.`,
    },
    {
      type: 'code',
      code: `
        import { Box } from 'gestalt';

        function MyComponent(props: Props) {
          const style2 = { __style: { background: props.background } };
          return <Box dangerouslySetInlineStyle={style2} height={60} width={60} />;
        }
      `,
      language: 'javascript',
    },
    {
      type: 'heading',
      heading: 'SCSS',
      level: 1,
    },
    {
      type: 'text',
      text: `
        If all else fails, SCSS is our fallback for last resorts. There are very limited reasons to need to
        use SCSS, however two use cases justify the need: animations using keyframes and browser auto-prefixing.`,
    },
    {
      type: 'text',
      text: `
        If you find yourself in this scenario, we enforce keeping one CSS file per component and recommend using
        BEM naming for classes.`,
    },
    {
      type: 'heading',
      heading: 'Classnames',
      level: 2,
    },
    {
      type: 'text',
      text: `
        For plain classnames, all you need to do is pass a \`className\` prop to an HTML element to apply the styles.`,
    },
    {
      type: 'code',
      code: `
        function MyComponent(props: Props) {
          return <div className="classnames-example" />;
        }
      `,
      language: 'javascript',
    },
    {
      type: 'heading',
      heading: 'Conditional Classnames',
      level: 2,
    },
    {
      type: 'text',
      text: `
        Sometimes, classnames need to be applied conditionally based on the props or state of a component. For
        these scenarios, we utilize a helper function which creates the classname dynamically. Import the util and
        apply it to the \`className\` prop.`,
    },
    {
      type: 'code',
      code: `
        import cx from "classnames";

        function MyComponent(props: Props) {
          return (
            <div className={cx("classnames-example", {
              "classnames-example--toggled": props.toggled })}
            />
          );
        }
      `,
      language: 'javascript',
    },
    {
      type: 'heading',
      heading: 'Further Reading',
      level: 1,
    },
    {
      type: 'text',
      text: `
        For more information, check out the amazing [tech talk](http://christianvuerings.github.io/presentations/css-at-pinterest/)
        put together by our very own @Christian V on the state of CSS at Pinterest and best practices.`,
    },
  ],
};

export default page;
