// @ts-check

const storybookConfig = require('./.storybook/main');

/**
 * Config for the LLMs docs generator script.
 * @see {@link file://./../../tools/storybook-llms-extractor/src/cli.ts}
 *
 * @type {import('@iqvizyonui/storybook-llms-extractor').Config}
 */
module.exports = {
  distPath: './dist/react',
  summaryBaseUrl: 'https://iqvizyon-development.github.io/iqv-design-system/react/',
  summaryTitle: 'Iqvizyon UI React',
  summaryDescription: 'Iqvizyon UI React is a library of React components that implement the Iqvizyon Design System.',
  refs: storybookConfig.refs ? Object.values(storybookConfig.refs) : [],
};
