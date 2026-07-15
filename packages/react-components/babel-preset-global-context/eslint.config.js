// @ts-check

const iqvizyonPlugin = require('@iqvizyonui/eslint-plugin');

module.exports = [
  ...iqvizyonPlugin.configs['flat/node'],
  {
    rules: {
      '@iqvizyonui/react-components/enforce-use-client': 'off',
    },
  },
];
