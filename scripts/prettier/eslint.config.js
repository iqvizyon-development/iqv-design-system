// @ts-check
const iqvizyonPlugin = require('@iqvizyonui/eslint-plugin');

/** @type {import("eslint").Linter.Config[]} */
module.exports = [
  ...iqvizyonPlugin.configs['flat/node'],
  ...iqvizyonPlugin.configs['flat/imports'],
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
