// @flow

export default {
  name: 'Setting Up Your Laptop',
  path: 'settingupyourlaptop',
  cards: [
    {
      type: 'title',
      title: 'Setting Up Your Laptop',
      description: `
        This guide is a walkthrough of how to get access to our codebase on your laptop. It will guide you
        through all the steps needed before you can start writing your first pull requests.`,
    },
    {
      type: 'heading',
      heading: 'Getting Phabricator Access',
      level: 1,
    },
    {
      type: 'text',
      text: `
        [Phabricator](https://phabricator.pinadmin.com/) is home to all of our repositories, code reviews,
        and has many more in-depth features that can be customized to make your life easier. All engineers
        will need access to it in order to get code into production.`,
    },
    {
      type: 'code',
      code: 'ssh-keygen -t rsa -b 4096',
      language: 'shell',
    },
  ],
};
