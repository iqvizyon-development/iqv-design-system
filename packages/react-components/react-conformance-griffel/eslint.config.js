// @ts-check

const fluentPlugin = require('@iqvizyonui/eslint-plugin');

module.exports = [
  ...fluentPlugin.configs['flat/node'],
  {
    files: ['**/*.ts'],
    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
  },
];
