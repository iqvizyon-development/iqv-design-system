// @ts-check
const fluentPlugin = require('@iqvizyonui/eslint-plugin');

/** @type {import("eslint").Linter.Config[]} */
module.exports = [
  {
    ignores: ['**/plop-templates-*/**'],
  },
  ...fluentPlugin.configs['flat/node'],
  ...fluentPlugin.configs['flat/imports'],
  {
    rules: {
      '@iqvizyonui/max-len': 'off',
      'import/no-extraneous-dependencies': [
        'error',
        {
          packageDir: ['.', '../../'],
        },
      ],
    },
  },
  {
    files: ['index.d.ts'],
    rules: {
      'import/no-self-import': 'off',
    },
  },
];
