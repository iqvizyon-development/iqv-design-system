// @ts-check

const iqvizyonPlugin = require('@iqvizyonui/eslint-plugin');

module.exports = [
  ...iqvizyonPlugin.configs['flat/node'],
  {
    files: ['**/*.ts'],
    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
  },
];
