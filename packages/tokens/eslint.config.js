// @ts-check
const fluentPlugin = require('@iqvizyonui/eslint-plugin');

/** @type {import("eslint").Linter.Config[]} */
module.exports = [
  ...fluentPlugin.configs['flat/react'],
  {
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: ['@iqvizyonui/*', 'react', 'react-dom'],
        },
      ],
    },
  },
];
