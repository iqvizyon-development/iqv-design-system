// @ts-check

const iqvizyonPlugin = require('@iqvizyonui/eslint-plugin');

module.exports = [
  ...iqvizyonPlugin.configs['flat/node'],
  {
    ignores: ['src/__fixtures__/**'],
  },
];
