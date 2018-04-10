// @flow

export default {
  name: 'Setting Up Atom Editor',
  path: 'atom',
  cards: [
    {
      type: 'title',
      title: 'Setting Up Atom Editor',
      description: `
        A powerful editor increases developer velocity and works well with the technologies and frameworks
        that we use in our codebase. Pinterest gives you the freedom to work in any IDE so this guide is
        only a starting point for gaining all the support you’ll need for the tools we use.`,
    },
    {
      type: 'heading',
      heading: 'Installing Atom',
      level: 1,
    },
    {
      type: 'text',
      text: `
        [Atom](https://atom.io/) is an incredible open source text editor created by the GiHub community
        with tremendous support for all of the plugins and features we use.`,
    },
    {
      type: 'text',
      text: `
        Install the application by visiting the Atom website and clicking download, follow your computer’s
        instructions to complete the process and you’re good to go.`,
    },
    {
      type: 'heading',
      heading: 'Adding Flow Support',
      level: 1,
    },
    {
      type: 'text',
      text: `
        The best part of using an open source text editor is the ability for us to configure plugins.
        While Atom on its own is very easy to use, I recommend using the Nuclide package for full
        feature integration.`,
    },
    {
      type: 'text',
      text: `
        [Nuclide](https://nuclide.io/) is an open source project created by Facebook in order to provide
        seamless integration into their other technologies, React and Flow.`,
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
        1. Open Atom.
        2. Choose Atom → Preferences from the menu bar to bring up the **Settings** tab.
        3. In the **Settings** tab, select **Install** from the list at the left.
        4. In the search box, type “nuclide” and press the Enter key.
        5. Click the **Install** button.`,
    },
    {
      type: 'text',
      text: `
        Once the installation completes, click the Settings button and scroll down to find the section
        labeled “Install Recommended Packages on Startup”. This option tells Nuclide to install the rest
        of the recommended packages we will need. Check the box to enable this option.`,
    },
    {
      type: 'text',
      text: `
        Continue scrolling down the page to find the next option we will need to enable under the
        “Nuclide-flow” heading. At Pinterest we include Flow as part of our development dependencies,
        which we need to tell Nuclide about. Check the box to enable using our Flow binary.`,
    },
    {
      type: 'text',
      text: `
        You are now ready to harness all of Nuclide’s features for React development, restart Atom for all
        the changes to take effect before moving to the next step.`,
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
        Support for ESLint in Atom comes through the [linter-eslint](https://atom.io/packages/linter-eslint)
        package which is as easy to install as Nuclide.`,
    },
    {
      type: 'text',
      text: `
        1. Open Atom.
        2. Choose Atom → Preferences from the menu bar to bring up the **Settings** tab.
        3. In the **Settings** tab, select **Install** from the list at the left.
        4. In the search box, type “linter-eslint” and press the Enter key.
        5. Click the **Install** button.`,
    },
    {
      type: 'text',
      text: `
        Note: If Atom asks you to install another package named “linter” in a prompt like the one
        below, do not install it, just decline by clicking on the Never button to dismiss the error.
        We will be using the default features of Nuclide which conflict with the current version of
        this package.`,
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
        Support for Prettier in Atom comes through the [prettier-atom](https://atom.io/packages/prettier-atom)
        package.`,
    },
    {
      type: 'text',
      text: `
        1. Open Atom.
        2. Choose Atom → Preferences from the menu bar to bring up the **Settings** tab.
        3. In the **Settings** tab, select **Install** from the list at the left.
        4. In the search box, type “prettier-atom” and press the Enter key.
        5. Click the **Install** button.`,
    },
    {
      type: 'text',
      text: `
        Lastly, in order to make Prettier work with our ESLint setup from before we need to enable one
        feature in the options menu. Once the installation completes, click the **Settings** button and
        scroll down to find the option labeled “ESLint Integration”. Check the box to enable this option.`,
    },
    {
      type: 'text',
      text: `
        You will now be able to see Prettier errors live in Atom which can be fixed via the error dialogue
        that appears or on demand with the command ctrl+option+f.`,
    },
  ],
};
