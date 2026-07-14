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
  summaryBaseUrl: 'https://storybooks.fluentui.dev/react/',
  summaryTitle: 'Iqvizyon UI React v9',
  summaryDescription:
    "Iqvizyon UI React is a library of React components that implement Microsoft's [Fluent Design System](https://fluent2.microsoft.design).",
  refs: storybookConfig.refs ? Object.values(storybookConfig.refs) : [],
};
