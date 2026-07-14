// @ts-check

const fluentPlugin = require('@iqvizyonui/eslint-plugin');

module.exports = [
  ...fluentPlugin.configs['flat/node'],
  {
    ignores: ['src/__fixtures__/**'],
  },
];
